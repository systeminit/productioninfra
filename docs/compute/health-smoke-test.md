---
title: Health & Smoke Test
description: Essential health checks and smoke testing for successful deployments and monitoring
---

# Health & Smoke Test

## Intro
* Key component of application/continuous deployment

## Why This Matters
* Ensuring deployments are successful
* Knowing when live deployments are having trouble

## Our Recommendation
* Have a standardized pattern for health/ready checks
* Have set of smoke tests to promote blue/green deployment

## How To Do It
* Standard `/health` HTTP endpoints
* `/ready` as well?
* 200 OK when application is ready to handle work (serve traffic, has DB connection, etc.)

## Alternatives/Notes
*

## Dependencies
* [Continuous Integration](/compute/continuous-integration)

## Dependents
* [Continuous Deployment](/operations/continuous-deployment)
* [Load Balancer](/compute/load-balancer)