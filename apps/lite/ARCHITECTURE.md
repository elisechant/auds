# [DRAFT] Architecture 

> This document is a work in progress, and may change as our understanding or consensus changes. 

## Project goals 

The primary Goal of this project from an AWE POV (with view to build React Components), is to turn AuDS in to a useful base. 

The second Goal of this project is to build an open source vanilla design system. 


## Plan to get there

The plan is to flatten the original AuDS source in to pure vanilla assets without changing the look and feel of the system. Or in other words, to simplify the uncompiled source code, while **retaining as much of the output of the origin system** as possible. 

The future product will be a vanilla Design System. The immediate need is to create HTML templates, CSS and design tokens via CSS Variables. A next stage course of action should be to create interactivity and offer basic JavaScript, or this may be in the form of Web Components. This direction meets AWE's immediate need of creating a React Component library as fast as possible.  

Once this work is complete and there is a vanilla design system, other groups (internal and external) may implement UI Framework implementations, such as using React, which ingest this Design System as a base system.

This design future-proofs this system from UI Framework churn.


## Architectural pillars

### Design Tokens 

**Design tokens enable us to find a common language to talk about design constraints in user interfaces**.

> **🔵:** There's a great article about this by @jxnblk, the creator of the System UI Theme Spec, [The Design Graph](https://jxnblk.com/blog/design-graph/).

The north star here is to create a two layer token system with a themeable object in TypeScript. The two layers will separate raw values to semantics. 

As a first step, we can use design tokens as CSS Variables as a way of extracting styling logic from Sass. This will enable us to remove Sass from the project.

The Primitive Layer (layer 1) should map to the [System UI Theme Specification](https://system-ui.com/theme/) and form a complete system raw values. Once this is complete, there should be very limited need for static style values. For example: 

    --auds-colors-blue-100: #dddddd;
    --auds-colors-blue-200: #ddddde;
    
Ideally, Layer 1 would take the form of a Theme Object and not be exported. 

The Semantic Layer (layer 2) should map to user needs. It should reference values from Layer 1. For example: 

    --auds-primary-color: var(--auds-colors-blue-200);

A technical Goal for this system should be to maintain the privacy of Layer 1 and for CSS and external consumers to only have access to Layer 2. A main advantage to this is maintenance and semantic version control, and to _maintain evolutionary control_ of the system. 


#### Some caveats to System UI Theme Spec 

* As an initial step, we will not use a JavaScript Theme Object and use only CSS Variables as Layer 1 and Layer 2. In the future we should look to using a Theme Object as a root style dictionary because it can be typed and this will make future features such as Theming, easier and less error prone.

* To use dictionaries for values instead of arrays, for example:


    colors: {
      blue: '#07c',
      blue_100: '#004170',
      blue_200: '#006fbe',
      blue_300: '#2d8fd5',
    }
    
instead of:
    
    colors: {
      blue: '#07c',
      blues: [
        '#004170',
        '#006fbe',
        '#2d8fd5',
      ]
    }

the reasoning here is that inserting values in to arrays is almost always a breaking change and requires larger semantic bumping.

* Naming is not enough, we must document tokens.
 

### CSS 

The system should export a vanilla CSS asset. 

UI Frameworks that pick up this code can therefore include that asset as they see fit, including translating it to CSS-in-JS via the [CSS Modules](https://github.com/css-modules/css-modules) pattern. 


### JavaScript

This is the item we are most unsure about.

An open system would need JavaScript interactivity to be a viable replacement for the current AuDS.
 
