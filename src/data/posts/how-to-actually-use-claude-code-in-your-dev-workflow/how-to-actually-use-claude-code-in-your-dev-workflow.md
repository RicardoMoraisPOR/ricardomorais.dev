Autocomplete was never the interesting part. Here's how to make an AI agent earn a permanent spot in your terminal, and the handful of habits that separate a useful pair programmer from a liability.

## Stop treating it like tab-completion

If you're only using AI for inline suggestions, finishing a line, generating a regex you didn't want to think about, you're using maybe a third of what it's actually good for. Run an agent directly in your terminal instead, one that can read your whole repo, run commands, and hold a conversation across an entire task. [Claude Code](https://code.claude.com/docs/en/overview) works this way by default: it's not a chatbot waiting for the next question, it's a session that explores, plans, and implements while you watch or step away.

That shift matters more than it sounds. Managing a teammate means giving it context up front, checking its work, and setting boundaries, exactly like you would with a new hire. Skip that part and you'll get confident, well-formatted code that quietly does the wrong thing.

## Write the one file that changes everything: CLAUDE.md

The single highest-leverage thing you can do is write a [`CLAUDE.md`](https://code.claude.com/docs/en/memory) at the root of your project. It's nothing fancy, just plain markdown the agent reads at the start of every session:

```markdown
## Commits

Never commit or push without asking first.

## Conventions

We use feature-based folders, not type-based. Match the existing pattern.

## Style

Don't add comments explaining what the code does. The code should read on its own.
```

Every session starts by reading that file, so you stop re-explaining the same five rules every single day. Keep it short, only include what would actually cause a mistake if it were missing, and check it into git so the rest of your team benefits too. If you only take one thing from this post, take this one.

## Let it build memory, not just read a static file

A CLAUDE.md file is static. What actually makes a workflow click is a persistent memory system on top of it, notes the agent writes for itself about how you like to work, what you've corrected it on before, and what's actually going on in the project right now. Claude Code ships an [auto memory](https://code.claude.com/docs/en/memory) feature built exactly for this: it writes and recalls these notes without you managing a file by hand.

A useful split to aim for:

- **Feedback memories** — corrections and confirmations. If you say "stop doing X" once, you shouldn't have to say it again next week.
- **Project memories** — the "why" behind decisions that git history alone won't tell it: deadlines, who asked for what, why a rewrite exists.
- **User memories** — your role, your blind spots, how deep an explanation you actually want.

Set this up and you get an agent that gets less annoying over time instead of more, which is the opposite of most tools.

## Make it plan before touching anything non-trivial

For anything bigger than a one-line fix, make it write a plan before touching a single file. [Plan mode](https://code.claude.com/docs/en/permission-modes#analyze-before-you-edit-with-plan-mode) exists for exactly this: it blocks edit and write tools at the permission layer, so the agent can only read, explore, and propose, not change anything, until you approve. A prompt like:

> Read `src/auth` and understand how sessions work. I want to add Google OAuth. What files change? Create a plan.

...gets you a numbered plan naming the files, the logic, and the risks, with zero code touched yet. Let it explore the relevant code, propose an approach, and give you the chance to redirect it before any code changes exist, not after you've already reviewed a diff you have to partially throw away.

This one habit will save you more time than every other trick combined. Reviewing a plan takes minutes. Reviewing and unwinding a wrong implementation doesn't. The trade-off: for a genuinely trivial change, like fixing a typo or renaming a variable, skip the plan and just ask for it directly. If you can describe the diff in one sentence, planning it first is pure overhead.

## Fork off the noisy parts

Some tasks generate a mountain of output you'll never need to see again: grepping through an unfamiliar repo, reading through a long log, trying three different fixes before one works. For those, tell it to use a [subagent](https://code.claude.com/docs/en/sub-agents) to do the exploring and come back with just the answer, instead of filling your own context with every dead end along the way:

> Use a subagent to investigate how our auth system handles token refresh, and whether we already have OAuth utilities I should reuse.

The subagent runs in its own context window and reports back a summary. Your main conversation never sees the twenty files it opened to get there.

It's a small thing, but it's the difference between a session that stays sharp for hours and one that degrades because it's dragging around a transcript full of noise.

## Draw a hard line anyway

None of this means blind trust. Keep these non-negotiable:

- **Nothing destructive without asking.** Force pushes, hard resets, deleting branches, dropped tables, if it's hard to undo, you should approve it explicitly, every time.
- **Read the diff.** Every diff. Well-formatted code that does the wrong thing is still the wrong thing.
- **Remember that tests and types check correctness, not intent.** A green test suite doesn't mean the feature does what you actually wanted. Give it a real check to run, like a test suite, a build, or a screenshot comparison, and it will close the loop on its own instead of stopping the moment the output merely looks done.

The moment an agent starts feeling infallible is the moment it's about to cost you an afternoon.

## Is it worth building these habits?

Completely, though probably not for the reason you'd expect going in. The time saved on typing was never the point, it's cheap enough that it barely registers. The real gain is offloading the parts of development that are tedious but not hard: re-explaining context, exploring an unfamiliar file, writing the boilerplate around a decision you'd already made.

Write the one file that encodes how you work, let it remember what you've already told it, and make it show you the plan before it shows you the diff. Everything else is a smaller optimization on top of that.
