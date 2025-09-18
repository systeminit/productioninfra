---
title: Continuous Integration
description: Automated testing pipeline for pull requests and branches to catch issues early
---

# Continuous Integration

## Intro
- Test pull requests and branches
- Before they are merged to main
- catch issues early

## Why This Matters
* Catch potential issues early
* Allow for multiple branches at the same time

## Our Recommendation
* GitHub Actions
* Unit, format, lint tests on every PR
* Integration tests only on merge to main
* Smoke test should run on merge

## How To Do It
* Unit tests for fast coverage and algo complexity
* Formatting and lint
* Integration tests that require working infrastructure
* Smoke tests should be a small number (ideally one) test you will run post deployment
* Merge queue

## Alternatives/Notes
* CircleCI, BuildKite
* Manual UAT testing

## Dependencies
* [Application Artifacts](/application/application-artifacts)
* [VCS](/foundation/vcs)

## Dependents
* [Health & Smoke Test](/compute/health-smoke-test)