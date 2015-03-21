# Activate.js

> Turn elements on and off.

## About

- No dependency!
- [Turbolinks](https://github.com/rails/turbolinks) compatible!
- Flexible!
- Fast!
- IE8+

Fits perfectly for:

- Dropdowns
- Popovers
- Whatever!

## Usage

The handle:

```html
<button activate=".splash">Splash!</button>
```

The target:

```html
<div class="splash">
  Splash! <span deactivate>×</span>
</div>
```

That's it! Whenever you click on the handle it toggles the `active` attribute on the target, thus you can style it like that:

```css
.splash[active] {
  /* ... */
}
```

Also, if you click either outside the target or on a element with the `deactivate` attribute, while active, it deactivates.

Don't believe me? [See it for yourself!](http://jsfiddle.net/apmkL087/)

## License

See [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/)
