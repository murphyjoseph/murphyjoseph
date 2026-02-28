# Boundary-First Architecture

## The Problem

Every codebase I've worked on follows the same arc.

Month one, you can change anything. Refactors are easy. Moving files around is painless. You're fast.

Six months in, you're afraid to touch shared utilities. A change in one feature breaks something unrelated. Someone asks "where should this logic live?" and three developers give three different answers. Refactors feel like defusing a bomb.

The codebase didn't get messy because the developers were bad. It got messy because nothing controlled how things connected to each other. Imports spread quietly. A checkout component imports a helper from the cart feature. A dashboard page reaches into the profile feature for a shared hook. A utility file in `shared/` starts importing from a feature because someone needed it in a hurry.

None of these feel wrong in the moment. Every one of them increases the blast radius of future changes.

Let me make this concrete. Say you have a structure like this:

```
app/
  home/
  dashboard/
  settings/
features/
  checkout/
  cart/
  profile/
shared/
platform/
api/
```

Now someone on your team opens `features/checkout/useCheckoutFlow.ts` and adds an import:

```ts
import { useCartItems } from '../cart/hooks/useCartItems';
```

Totally reasonable. Checkout needs cart data. The code works. The PR gets approved.

But what just happened architecturally? `checkout` and `cart` are now coupled. You can no longer change `cart`'s internal hook signature without considering checkout. You can't refactor cart's internals without checking who else reached in. And six months from now, three more features have done the same thing, and `cart` has become a load-bearing wall that nobody wants to touch.

This is the pattern. Not one bad decision, but a hundred reasonable ones that compound into a codebase where the blast radius of any change is unknowable without tracing imports by hand.

## What If the Structure Told You the Blast Radius?

The fix isn't better discipline. It's structural rules that make certain imports impossible.

Here's the same directory tree, but with explicit constraints:

```
app/              → Routes, pages, layouts. High churn. Low blast radius.
  home/           → Route-specific logic, components, state. Private by default.
  dashboard/
  settings/
features/         → Isolated business capabilities. Cannot import sibling features.
shared/           → Intentional cross-feature reuse. Cannot depend on features.
platform/         → Infrastructure. Auth, logging, i18n. Cannot import anything above it.
api/              → Integration boundary. Server interactions, adapters.
```

The rules:

Imports flow downward. `app → features → shared → platform`. Never upward. Never sideways. Never circular.

Sibling routes can't import each other. Sibling features can't import each other. If checkout needs cart data, that logic moves to `shared` intentionally, where both features import it. The coupling becomes visible, explicit, and contained.

With this in place, a developer looking at any file knows its blast radius from its location alone. A file in `features/checkout/` can only affect checkout and whatever routes consume it. A file in `shared/` affects known consumers. A file in `platform/` is rare and intentional. No import tracing. No guessing.

That import from earlier?

```ts
import { useCartItems } from '../cart/hooks/useCartItems';
```

It doesn't just fail code review. It fails the build.

So what does checkout actually do when it needs cart data? Two options.

If there's a clean abstraction, you move the logic to `shared/`. Both features import it from there. The dependency is visible, intentional, and maintained in one place.

If there isn't a clean abstraction yet, you copy the code. Checkout gets its own version. This feels wrong to most developers, but it's the safer move. A bad abstraction in `shared/` couples two features around the wrong seam, and now you're back to the load-bearing wall problem. Duplication inside a boundary is cheap to fix later. A premature abstraction in a shared layer is expensive to unwind.

The rule of thumb: don't promote to `shared/` until you have at least two, ideally three concrete instances of the same pattern. At that point, the abstraction practically writes itself because you can see what actually varies and what doesn't. Before that, you're guessing.

## Why This Changes How You Work

When boundaries are enforced, three things shift.

**Your regression surface shrinks.** You know what a change can affect before you run a single test, because the directory tells you. If boundaries hold, impact is contained by default.

**The fear goes away.** The thing that actually slows teams down isn't complexity. It's uncertainty. "If I change this, what else breaks?" When that answer is readable from the file tree, developers stop hesitating. They stop over-engineering defensive abstractions. They stop avoiding refactors because the risk feels unknowable.

**You stop needing to get it right the first time.** This is the one nobody talks about. When refactoring is cheap and safe, you don't need the perfect abstraction on day one. You write something concrete inside a feature, let it prove itself, and promote it to `shared` later when the pattern is real. Duplication inside a feature boundary is fine. It's not tech debt. It's isolation working as intended. The expensive mistake was never duplication. It was premature sharing that coupled things that should never have known about each other.

## This Isn't New. But It's Not Solved Either.

If you've used [Bulletproof React](https://github.com/alan2207/bulletproof-react), some of this will look familiar. It recommends unidirectional imports, feature isolation, and even provides ESLint rules through `import/no-restricted-paths` to enforce them. The bones are there. But the enforcement is optional, tucked into a docs page most people never read, and the _why_ behind the structure is secondary to the structure itself. It's a good starting point that most teams adopt partially and enforce never.

[Feature-Sliced Design](https://feature-sliced.design/) goes further with a full methodology, seven standardized layers, strict import direction, and its own linting toolchain. It's more rigorous, but it's also heavier. Seven layers is a lot of decisions for a team that just wants to stop breaking things when they touch shared code.

The ideas aren't missing. The follow-through is. Configuring `import/no-restricted-paths` by hand means writing zone after zone of path pairs that nobody maintains. The enforcement experience is bad enough that teams skip it, and then the architecture exists only on a wiki page.

I think there's something worth building here. A simpler configuration model where you describe structural intent, not individual import restrictions, and the tooling generates the rules for you. Something a new developer can read and understand the entire architectural contract in under a minute. I'm still noodling on what that config looks like and how to make the enforcement setup trivial enough that teams actually adopt it. More on that soon.
