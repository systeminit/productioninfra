---
title: Application Artifacts
description: Standard packaging of application components using Docker containers for streamlined deployment
---

# Application Artifacts

## Intro
- you need a standard way to package up your application components
- versioned and stored centrally
- built on demand

## Why This Matters
- a standard application artifact component streamlines deployment and testing
- application versioning gets standardized
- supports easy promotion and versioning

## Our Recommendation
- Use docker containers
- Start from an alpine base
- Use CalVer+gitsha, stable / latest

## How To Do It
- Links to the best details on how to build a docker image for given application stacks
- Use ECR for container registry
- Docker push to ECR

## Alternatives/Notes
- Docker Hub

## Dependencies
- [VCS](/foundation/vcs)
- [Foundational Networking](/infrastructure/foundational-networking)

## Dependents
-