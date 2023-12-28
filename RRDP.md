# Route → Realm → Domain → Platform (RRDP) Paradigm

## The Core Idea

A lightweight, enforceable architecture model that scales with the project and the team. RRDP helps developers move fast at the edge while keeping shared logic clean, predictable, and refactorable at the core.

### The Hierarchy

```
Route → Realm → Domain → Platform
(edge)   (area)   (shared)  (core)
```

Each layer has a clear purpose and an intuitive blast radius:

- **Route**: page or flow-specific logic; fast, flexible, and low risk
- **Realm**: shared logic within a business area
- **Domain**: shared cross-area concepts with business meaning
- **Platform**: app-wide primitives (auth, logging, transport, i18n, etc.)

**One-way imports**: Code is only allowed to import inward - e.g., Route can import from Realm, Domain, or Platform, but not from other Routes. This one-way flow reduces unexpected side effects and makes refactoring safer.

## Why RRDP Matters

### 1. Predictable Blast Radius

Each layer has an expected scope of impact. Editing a Platform module has more potential consequences than editing a Route file, and everyone intuitively understands that. This creates shared predictability around the complexity and risk of changes.

### 2. Refactorability Is a Scalability Signal

A scalable system isn't one that prevents change - it's one that makes refactoring safe and simple. RRDP enables that by isolating poor or experimental implementations. Even if we make bad calls early, the damage is contained.

### 3. Encourages Copying Before Abstracting

Most teams abstract too early. RRDP encourages copying small utilities or patterns until a clear reuse pattern emerges. Once a concept has multiple consumers, it graduates to a deeper layer where it can be stabilized and tested.

### 4. Natural Evolution and PoC Safety

We can build proof-of-concept (PoC) features directly within the Route or scoped _shared folders without endangering the rest of the app. If those experiments prove useful, they can be promoted upward through the layers. This flexibility creates a healthy feedback loop between exploration and structure.

### 5. Automation and "Stumble into Success"

The hierarchy isn't maintained by memory or willpower, it's enforced through ESLint automation. Import boundaries are machine-checked, making it nearly impossible to violate architectural rules by accident. Engineers automatically stay inside the lines, even while moving fast.

## What This Isn't

- It's not a massive framework or new dependency
- It's not a long setup - just folder conventions and ESLint rules
- It's not meant to slow developers down; it's meant to make the codebase safer to move quickly in

## The Outcome

- Better predictability when estimating work: blast radius = complexity
- Codebases that evolve instead of calcify
- Teams that can refactor fearlessly because architectural boundaries make it safe
- A shared mental model that's easy to explain and hard to abuse

## TL;DR

**RRDP = predictable change + safe refactors.**

- We organize by impact (blast radius), not just by feature
- Automation enforces it, so people naturally stumble into success
- Small concept, big payoff


