---
title: Foundational Networking
description: The foundation of all AWS deployments with secure and flexible network architecture
---

# Foundational Networking

## Intro
- The foundation of all your AWS deployments
- Important to get right because its hard to change later
- Public and private subnets, IP ranges with room to grow

## Why this matters
- Its the foundation of your network, everything uses it
- It needs to be secure and flexible
- Getting it wrong is very hard to change once things are deployed

## Our Recommendation
- AWS best practices network
- Two availability zones
- Subnets, Internet Gateways, and route tables included

## How to do it
- Ask SI to use the standard aws template
- 2 azs, 10. private network

## Alternatives/Notes
- AWS Landing Zone
- AWS Core network hub/spoke

## Dependencies
- [IAM](/foundation/iam)

## Dependents
* [Overlay Network](/application/overlay-network)