# Addons for SilverStripe Green

This module provides additional feautres to the [silverstripe-green](https://github.com/unclecheese/silverstripe-green) module.

## Installation

`composer require unclecheese/silverstripe-green-addons`

## Auto-populating content

You can parse your `index.ss` template for variables and auto-create content using a task:

`$ framework/sake dev/tasks/GreenTemplateParserTask module=my-design-module`

This task looks at both variables and blocks defined in your template, converts them into the appropriate structure in JSON or YAML, and assigns placeholder content to them.

This feature is also available when editing YAML in the CMS. Just click (Load from template) above the code editor, and it will populate the editor automatically.

