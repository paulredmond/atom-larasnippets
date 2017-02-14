# Snippet Reference

This file is generated from the source `snippets/*.cson` files.



<hr />

### Define a singleton service

File: [application.cson](../snippets/application.cson)

Shortcut: `singleton` + <kbd>tab</kbd>

```
$this->app->singleton($1, function ($app) {
    $2
});
```


<hr />

### Service container binding

File: [application.cson](../snippets/application.cson)

Shortcut: `bind` + <kbd>tab</kbd>

```
$this->app->bind($1, function ($app) {
    $2
});
```


<hr />

### Define an alias for a service

File: [application.cson](../snippets/application.cson)

Shortcut: `alias` + <kbd>tab</kbd>

```
$this->app->alias('${1:abstract}', '${2:alias}');
```


<hr />

### Validation in the controller

File: [controller.cson](../snippets/controller.cson)

Shortcut: `validate` + <kbd>tab</kbd>

```
$this->validate(request(), [
    $1
]);
```


<hr />

### Json Response

File: [controller.cson](../snippets/controller.cson)

Shortcut: `rjson` + <kbd>tab</kbd>

```
response()->json($1);
```


<hr />

### View With

File: [controller.cson](../snippets/controller.cson)

Shortcut: `vieww` + <kbd>tab</kbd>

```
view('$1')${2:->with([$3])};
```


<hr />

### View

File: [controller.cson](../snippets/controller.cson)

Shortcut: `view` + <kbd>tab</kbd>

```
view('$1', [$2]);
```


<hr />

### Laravel Factory Definition

File: [database.cson](../snippets/database.cson)

Shortcut: `factory` + <kbd>tab</kbd>

```
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

```
$factory->state(App\$1::class, '${2:state}', function (Faker\Generator $faker) {
    return [
        $3
    ];
});
```


<hr />

### &quot;Has One&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `hasone` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->hasOne($2::class);
}
```


<hr />

### &quot;Has Many&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `hasmany` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->hasMany($2::class);
}
```


<hr />

### &quot;Belongs To&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `belongsto` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->belongsTo($2::class);
}
```


<hr />

### &quot;Belongs To Many&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `btm` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->belongsToMany($2::class);
}
```


<hr />

### &quot;Has Many Through&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `hasmanythrough` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->hasManyThrough($2::class, $3::class);
}
```


<hr />

### Polymorphism: Morph To

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `morphto` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->morphTo();
}
```


<hr />

### Polymorphism: Morph Many

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `morph` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->morphMany($2::class, '${3:commentable}');
}
```


<hr />

### Polymorphism: Morph Many (Long Prefix)

File: [eloquent.cson](../snippets/eloquent.cson)

Shortcut: `morphmany` + <kbd>tab</kbd>

```
public function $1()
{
    return $this->morphMany($2::class, '${3:commentable}');
}
```


<hr />

### Ascii Logo

File: [fun.cson](../snippets/fun.cson)

Shortcut: `laravel:logo` + <kbd>tab</kbd>

```
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

```
'$1' => ${2:'$3'},$0
```


<hr />

### The $this Keyword

File: [php.cson](../snippets/php.cson)

Shortcut: `this` + <kbd>tab</kbd>

```
$this
```


<hr />

### DocBlock Comment Shorter Expansion

File: [php.cson](../snippets/php.cson)

Shortcut: `/` + <kbd>tab</kbd>

```
/**
 * $1
 */
```


<hr />

### DocBlock Comment

File: [php.cson](../snippets/php.cson)

Shortcut: `/**` + <kbd>tab</kbd>

```
/**
 * $1
 */
```


<hr />

### Route

File: [routes.cson](../snippets/routes.cson)

Shortcut: `route` + <kbd>tab</kbd>

```
Route::$1('$2', '$3Controller@$4');
```


<hr />

### Route Group

File: [routes.cson](../snippets/routes.cson)

Shortcut: `route:group` + <kbd>tab</kbd>

```
Route::group([
    $1
], function () {
    $2
});
```


<hr />

### Laravel Test Case

File: [tests.cson](../snippets/tests.cson)

Shortcut: `testcase2` + <kbd>tab</kbd>

```
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class $1Test extends TestCase
{
    $2
}
```


<hr />

### PHP Unit Test

File: [tests.cson](../snippets/tests.cson)

Shortcut: `test` + <kbd>tab</kbd>

```
/** @test */
function $1()
{
    $2
}
```


<hr />

To regenerate this document run: `node docs.js`.
