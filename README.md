# Larasnippets: Laravel + PHP Snippets for Atom

<p align="center">
    <img width="100" height="69" src="https://cloud.githubusercontent.com/assets/177773/22904341/5564df6a-f1f9-11e6-90d4-39ac21d4f45e.png" />
    &nbsp;&nbsp;
    <img width="95" height="51" src="https://cloud.githubusercontent.com/assets/177773/22904331/463ea2d2-f1f9-11e6-8447-63aa8b22e39e.png" />
</p>

My collection of Laravel and PHP Snippets. The goal of this package isn't an exhaustive list of snippets, but simply the snippets I reach for and need most often.

<p align="center">
    <img src="https://cloud.githubusercontent.com/assets/177773/22904349/5c3b8046-f1f9-11e6-8476-c9514e761ab7.gif" alt="The factory snippet in action" />
</p>

## Deploy

1. Update the [changelog](./CHANGELOG.md).
1. Run the documentation update `npm run docs`
1. Run the deploy script
```
./publish
./publish major
./publish patch
```
_* Note, this is only for my reference. Nobody else can deploy this._

## Documentation

View the [Snippet Reference](./doc/snippet-reference.markdown) Markdown document for a full list of snippets. You can generate the latest version of the snippet reference documentation with:

```console
npm run docs
```

## External References

* [Laravel Official Documentation](https://laravel.com/docs)
* [Atom Snippets Documentation](http://flight-manual.atom.io/using-atom/sections/snippets/)
* My blog post about [creating the larasnippets plugin](http://bitpress.io/php/laravel/2017/02/13/larasnippets-atom-plugin/)
* My blog post about [generating snippet markdown documentation](http://bitpress.io/php/laravel/2017/02/14/atom-cson-snippet-documentation-generator/) for this project
