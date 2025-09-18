---
title: Application Dependencies
description: Managing system dependencies for security, compliance, and deployment
---

# Application Dependencies

## Intro
* Applications often require system dependencies
* OpenSSL, etc. - not service dependencies
* For your developer experience and application deployment you should enumerate them

## Why This Matters
* For security and compliance you'll need to know your dependencies
* For building effective docker containers for deployment
* Easy bootstrapping of development environments

## Our Recommendation
* Track your dependencies in a file
* Use Alpine to install them in the container

## How To Do It
- Find your deps in alpine
- Write them to a file
* Use APK to install them in your container

## Alternatives/Notes
* Use nix
* use ubuntu or brew or whatever

## Dependencies

## Dependents
* [Application Artifacts](/application/application-artifacts)