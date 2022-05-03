<!-- omit in toc -->
# Table of Content
- [What is Mono Repo?](#what-is-mono-repo)
  - [yarn workspaces](#yarn-workspaces)
  - [yarn scripts](#yarn-scripts)
- [Typescript configurations](#typescript-configurations)
  - [Use modules from workspace](#use-modules-from-workspace)
  - [Export settings](#export-settings)
- [How to write Typescript](#how-to-write-typescript)
  - [Command line prompt arguments](#command-line-prompt-arguments)
  - [How to work with Express](#how-to-work-with-express)
- [ESLint Integration](#eslint-integration)
- [Swagger Integration](#swagger-integration)
- [Application Deployment on Kubernetes](#application-deployment-on-kubernetes)
- [Troubleshooting](#troubleshooting)
  - [Module from workspace not found with `import` keyword](#module-from-workspace-not-found-with-import-keyword)


# What is Mono Repo?

## yarn workspaces

## yarn scripts


# Typescript configurations

## Use modules from workspace

## Export settings


# How to write Typescript

## Command line prompt arguments

## How to work with Express


# ESLint Integration


# Swagger Integration


# Application Deployment on Kubernetes


# Troubleshooting

## Module from workspace not found with `import` keyword

There are some situations may cause this issue:
1. `Module` is not defined in `compilerOptions`.`paths` in `tsconfig.json`
   > Solution:
   > 
   > Assume the name of module is `@utils` and the path of workspace is at `workspaces/utils`
   > ```json
   > {
   >   "compilerOptions": {
   >      ...,
   >      "paths": {
   >        "@utils/*": "workspaces/utils/src/*"
   >      }
   >   } 
   > }
   > ```
2. Path of `Module` is not defined correspondently in `compilerOptions`.`paths` in `tsconfig.json`
   > Solution:
   > 
   > If the script would like to use complied module of `@utils` in the `workspaces/utils/dist`. 
   > The path should be:
   > ```json
   > {
   >   "compilerOptions": {
   >      ...,
   >      "paths": {
   >        "@utils/*": "workspaces/utils/dist/*"
   >      }
   >   } 
   > }
   > ```
   >
   > This approach may not resolve this problem while the `workspaces/utils/dist` does not exist.
   > In this case, use source directory would be the better solution as follows:
   > ```json
   > {
   >   "compilerOptions": {
   >      ...,
   >      "paths": {
   >        "@utils/*": "workspaces/utils/src/*"
   >      }
   >   } 
   > }
   > ```
3. The directory of script or the script has been excluded in `tsconfig.json`.
   > Solution:
   >
   > Remove the directory from `exclude` attribute.
