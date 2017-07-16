# Snippet Reference

This file is generated from the source `snippets/*.cson` files.



<hr />

### Define a singleton service

File: [application.cson](../snippets/application.cson)

Shortcut: `singleton` + <kbd>tab</kbd>

```php
$this->app->singleton($1, function ($app) {
    $2
});
```


<hr />

### Service container binding

File: [application.cson](../snippets/application.cson)

Shortcut: `bind` + <kbd>tab</kbd>

```php
$this->app->bind($1, function ($app) {
    $2
});
```


<hr />

### Define an alias for a service

File: [application.cson](../snippets/application.cson)

Shortcut: `alias` + <kbd>tab</kbd>

```php
$this->app->alias('${1:abstract}', '${2:alias}');
```


<hr />

### Validation in the controller

File: [controller.cson](../snippets/controller.cson)

Shortcut: `validate` + <kbd>tab</kbd>

```php
$this->validate(request(), [
    $1
]);
```


<hr />

### Json Response

File: [controller.cson](../snippets/controller.cson)

Shortcut: `rjson` + <kbd>tab</kbd>

```php
response()->json($1);
```


<hr />

### View With

File: [controller.cson](../snippets/controller.cson)

Shortcut: `vieww` + <kbd>tab</kbd>

```php
view('$1')${2:->with([$3])};
```


<hr />

### View

File: [controller.cson](../snippets/controller.cson)

Shortcut: `view` + <kbd>tab</kbd>

```php
view('$1', [$2]);
```


<hr />

### Laravel Factory Definition

File: [database.cson](../snippets/database.cson)

Shortcut: `factory` + <kbd>tab</kbd>

```php
$factory->define(App\$1::class, function (Faker\Generator $faker) {
    return [
        $2
    ];
});
```


<hr />

### Laravel Factory State Definition

File: [database.cson](../snippets/database.cson)

Shortcut: `factory:state` + <kbd>tab</kbd>

```php
$factory->state(App\$1::class, '${2:state}', function (Faker\Generator $faker) {
    return [
        $3
    ];
});
```


<hr />

### Create a model

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `model` + <kbd>tab</kbd>

```php
namespace App;

use IlluminateDatabaseEloquentModel;

class $1 extends Model
{
    protected $guarded = [];
}
```


<hr />

### &quot;Has One&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `hasone` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->hasOne($2::class);
}
```


<hr />

### &quot;Has Many&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `hasmany` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->hasMany($2::class);
}
```


<hr />

### &quot;Belongs To&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `belongsto` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->belongsTo($2::class);
}
```


<hr />

### &quot;Belongs To Many&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `btm` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->belongsToMany($2::class);
}
```


<hr />

### &quot;Has Many Through&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `hasmanythrough` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->hasManyThrough($2::class, $3::class);
}
```


<hr />

### Polymorphism: Morph To

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `morphto` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->morphTo();
}
```


<hr />

### Polymorphism: Morph Many

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `morph` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->morphMany($2::class, '${3:commentable}');
}
```


<hr />

### Polymorphism: Morph Many (Long Prefix)

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `morphmany` + <kbd>tab</kbd>

```php
public function $1()
{
    return $this->morphMany($2::class, '${3:commentable}');
}
```


<hr />

### Ascii Logo

File: [fun.cson](../snippets/fun.cson)

Shortcut: `laravel:logo` + <kbd>tab</kbd>

```php
:/:::::::+.
.+-      `+:
 .+-      `//`
  -+:       :/`            `---::-:-
   -+:       -+.            -/.    .:.
    -+:       .+:            `/:`   `:/`
     -+:       `//`         ``./+::::::.
      -o:       `:+.`..-::::::-..:/`
       -o:``..-::/+++:-.```       ./-
        -+//::-.```-+:             `:/`
                    .+/`       `..:/+/:
                     `++``.-:/+//:-`
                      `/++/:-.
```


<hr />

### Key/Value Pairs

File: [php.cson](../snippets/php.cson)

Shortcut: `kv` + <kbd>tab</kbd>

```php
'$1' => ${2:'$3'},$0
```


<hr />

### The $this Keyword

File: [php.cson](../snippets/php.cson)

Shortcut: `this` + <kbd>tab</kbd>

```php
$this
```


<hr />

### DocBlock Comment Shorter Expansion

File: [php.cson](../snippets/php.cson)

Shortcut: `/` + <kbd>tab</kbd>

```php
/**
 * $1
 */
```


<hr />

### DocBlock Comment

File: [php.cson](../snippets/php.cson)

Shortcut: `/**` + <kbd>tab</kbd>

```php
/**
 * $1
 */
```


<hr />

### PHP Anonymous Function

File: [php.cson](../snippets/php.cson)

Shortcut: `func` + <kbd>tab</kbd>

```php
function ($1) {
    $2
}
```


<hr />

### PHP Public Function Based on PhpStorm

File: [php.cson](../snippets/php.cson)

Shortcut: `pubf` + <kbd>tab</kbd>

```php
public function $1($2)
{
    $0
}
```


<hr />

### PHP Protected Function Based on PhpStorm

File: [php.cson](../snippets/php.cson)

Shortcut: `prof` + <kbd>tab</kbd>

```php
protected function $1($2)
{
    $0
}
```


<hr />

### PHP Private Function Based on PhpStorm

File: [php.cson](../snippets/php.cson)

Shortcut: `prif` + <kbd>tab</kbd>

```php
private function $1($2)
{
    $0
}
```


<hr />

### PHP Public Function for an interface

File: [php.cson](../snippets/php.cson)

Shortcut: `ipubf` + <kbd>tab</kbd>

```php
public function $1($2);
```


<hr />

### Route

File: [routes.cson](../snippets/routes.cson)

Shortcut: `route` + <kbd>tab</kbd>

```php
Route::$1('$2', '$3Controller@$4');
```


<hr />

### Route Group

File: [routes.cson](../snippets/routes.cson)

Shortcut: `route:group` + <kbd>tab</kbd>

```php
Route::group([
    $1
], function () {
    $2
});
```


<hr />

### Laravel Test Case

File: [tests.cson](../snippets/tests.cson)

Shortcut: `testcase` + <kbd>tab</kbd>

```php
namespace Tests\$1;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class $2Test extends TestCase
{
    $3
}
```


<hr />

### PHP Unit Test

File: [tests.cson](../snippets/tests.cson)

Shortcut: `test` + <kbd>tab</kbd>

```php
/** @test */
function $1()
{
    $2
}
```


<hr />

### Shebang (Longer Shortcut)

File: [util.cson](../snippets/util.cson)

Shortcut: `shebang` + <kbd>tab</kbd>

```
#!/usr/bin/env ${1:bash}$0
```


<hr />

### Shebang

File: [util.cson](../snippets/util.cson)

Shortcut: `#!` + <kbd>tab</kbd>

```
#!/usr/bin/env ${1:bash}$0
```


<hr />

To regenerate this document run: `node docs.js`.
