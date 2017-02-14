# Snippet Reference

This file is generated from the source `snippets/*.cson` files.


### Define a singleton service

File: [application.cson](../snippets/application.cson)

Tab completion: `singleton` + tab

Source Code:

```
$this->app->singleton($1, function ($app) {
    $2
});
```

### Service container binding

File: [application.cson](../snippets/application.cson)

Tab completion: `bind` + tab

Source Code:

```
$this->app->bind($1, function ($app) {
    $2
});
```

### Define an alias for a service

File: [application.cson](../snippets/application.cson)

Tab completion: `alias` + tab

Source Code:

```
$this->app->alias('${1:abstract}', '${2:alias}');
```

### Validation in the controller

File: [controller.cson](../snippets/controller.cson)

Tab completion: `validate` + tab

Source Code:

```
$this->validate(request(), [
    $1
]);
```

### Json Response

File: [controller.cson](../snippets/controller.cson)

Tab completion: `rjson` + tab

Source Code:

```
response()->json($1);
```

### View With

File: [controller.cson](../snippets/controller.cson)

Tab completion: `vieww` + tab

Source Code:

```
view('$1')${2:->with([$3])};
```

### View

File: [controller.cson](../snippets/controller.cson)

Tab completion: `view` + tab

Source Code:

```
view('$1', [$2]);
```

### Laravel Factory Definition

File: [database.cson](../snippets/database.cson)

Tab completion: `factory` + tab

Source Code:

```
$factory->define(App\$1::class, function (Faker\Generator $faker) {
    return [
        $2
    ];
});
```

### Laravel Factory State Definition

File: [database.cson](../snippets/database.cson)

Tab completion: `factory:state` + tab

Source Code:

```
$factory->state(App\$1::class, '${2:state}', function (Faker\Generator $faker) {
    return [
        $3
    ];
});
```

### &quot;Has One&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `hasone` + tab

Source Code:

```
public function $1()
{
    return $this->hasOne($2::class);
}
```

### &quot;Has Many&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `hasmany` + tab

Source Code:

```
public function $1()
{
    return $this->hasMany($2::class);
}
```

### &quot;Belongs To&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `belongsto` + tab

Source Code:

```
public function $1()
{
    return $this->belongsTo($2::class);
}
```

### &quot;Belongs To Many&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `btm` + tab

Source Code:

```
public function $1()
{
    return $this->belongsToMany($2::class);
}
```

### &quot;Has Many Through&quot; Relationship

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `hasmanythrough` + tab

Source Code:

```
public function $1()
{
    return $this->hasManyThrough($2::class, $3::class);
}
```

### Polymorphism: Morph To

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `morphto` + tab

Source Code:

```
public function $1()
{
    return $this->morphTo();
}
```

### Polymorphism: Morph Many

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `morph` + tab

Source Code:

```
public function $1()
{
    return $this->morphMany($2::class, '${3:commentable}');
}
```

### Polymorphism: Morph Many (Long Prefix)

File: [eloquent.cson](../snippets/eloquent.cson)

Tab completion: `morphmany` + tab

Source Code:

```
public function $1()
{
    return $this->morphMany($2::class, '${3:commentable}');
}
```

### Ascii Logo

File: [fun.cson](../snippets/fun.cson)

Tab completion: `laravel:logo` + tab

Source Code:

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

### Key/Value Pairs

File: [php.cson](../snippets/php.cson)

Tab completion: `kv` + tab

Source Code:

```
'$1' => ${2:'$3'},$0
```

### The $this Keyword

File: [php.cson](../snippets/php.cson)

Tab completion: `this` + tab

Source Code:

```
$this
```

### DocBlock Comment Shorter Expansion

File: [php.cson](../snippets/php.cson)

Tab completion: `/` + tab

Source Code:

```
/**
 * $1
 */
```

### DocBlock Comment

File: [php.cson](../snippets/php.cson)

Tab completion: `/**` + tab

Source Code:

```
/**
 * $1
 */
```

### Route

File: [routes.cson](../snippets/routes.cson)

Tab completion: `route` + tab

Source Code:

```
Route::$1('$2', '$3Controller@$4');
```

### Route Group

File: [routes.cson](../snippets/routes.cson)

Tab completion: `route:group` + tab

Source Code:

```
Route::group([
    $1
], function () {
    $2
});
```

### Laravel Test Case

File: [tests.cson](../snippets/tests.cson)

Tab completion: `testcase2` + tab

Source Code:

```
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class $1Test extends TestCase
{
    $2
}
```

### PHP Unit Test

File: [tests.cson](../snippets/tests.cson)

Tab completion: `test` + tab

Source Code:

```
/** @test */
function $1()
{
    $2
}
```


<hr />

To regenerate this document run: `node docs.js`.
