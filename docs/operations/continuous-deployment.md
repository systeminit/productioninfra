---
title: Continuous Deployment
description: Automated deployment pipeline for building and deploying applications on merge
---

# Continuous Deployment

## Intro
* Build and deploy your application automatically on merge
* Deploy to a staging environment always
* As you build trust, deploy to main

## Why This Matters
* The closer a deployment is to the code change, the easier it is to debug when it breaks
* Release cadence is tied to customer satisfaction
* Nobody has to think about deployment :)

## Our Recommendation
* GitHub Actions
* SI

## How To Do It
* On merge to main, build and push artifacts, tag the stable release
* Update the ECS task for the services that changed
* Apply the change set
* For production deployments, consider creating a change set that's open, but waiting to merge

## Alternatives/Notes
* Open the change set, but manually deploy

## Dependencies
* [VCS](/foundation/vcs)
* [Application Artifacts](/application/application-artifacts)
* [Health & Smoke Test](/compute/health-smoke-test)

## Dependents
*