# Expanded Archive Implementation Plan

**Goal:** Publish the maximum eligible material from the supplied research in the existing PelelecApp UI.
**Architecture:** Keep the existing HTML/CSS and renderer. Convert a validated, sanitized snapshot of the supplied build into the current contact/message schema with a repeatable Node adapter. Preserve source IDs, confidence, variants, precision, third-party attribution and published images.
**Tech Stack:** Static HTML/CSS/JS; Node built-in tests and build scripts, no new dependencies.
**Spec:** User authorizes publication and overrides the source project's no-deploy rule on 22/09/2026. All documentary/privacy rules remain.

- [x] Validate upstream build and inspect publication payload for private/unsupported material.
- [x] Add snapshot adapter and invariant tests; preserve existing media and counterpart records without treating summaries as additional original messages.
- [x] Render source details, statuses, variants, recovered-by-PF labels, groups and third-party exchanges. Retain defaults and promotional placement.
- [x] Verify all contacts, source panels, search, mobile and desktop; document counts and omissions.
- [ ] Commit, push, merge and verify GitHub Pages publication.

Original evidence remains in Portuguese in both interface languages, explicitly labeled; no automatic rewriting of message text.
