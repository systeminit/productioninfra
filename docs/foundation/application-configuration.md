---
title: Application Configuration
description: Standardized configuration management for different deployment scenarios
---

# Application Configuration

## Intro
* you need to be able to configure your applications for different scenarios
* you need both configuration files and environment variables
* a standardized way regardless of technology stack will serve you well

## Why This Matters
* standardized configuration makes it easy to adapt applications to different deployments
* easier for the team to understand

## Our Recommendation
* Use TOML for your configuration file
* Expose each option as an environment variable

## How To Do It
* Use layered configuration
* environment should override all
* accept configuration files as well

## Alternatives/Notes
* 12 factor applications that have only environment configuration

## Dependencies

## Dependents
* [Service Discovery](/infrastructure/service-discovery)
* [Application Artifacts](/application/application-artifacts)
* [Credential Management & Secrets](/infrastructure/credential-management-secrets)