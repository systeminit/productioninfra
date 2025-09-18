---
title: WAF & CDN
description: Application-level protection and content delivery optimization for better security and performance
---

# WAF & CDN

## Intro
* WAF provides application/api level protection against accidental or intentional attacks to routes potentially limiting capacity/availability
* CDN can increase the perceived responsiveness of a service by caching objects that are physically closer to the end user
* Remember: cache invalidation ain't easy ;)

## Why This Matters
* Protection and reducing attack vectors on services
* Helps services feel faster by reducing latency when downloading content

## Our Recommendation
* Cloudfront

## How To Do It
* Determine routes that benefit from caching and whether or not cache invalidation is required
* Consider invalidating cached routes on service deploys

## Alternatives/Notes
* Cloudflare
* Fastly

## Dependencies
* [Foundational Networking](/infrastructure/foundational-networking)

## Dependents
*