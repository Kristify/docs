# Products.lua spec

Here are the specifications for `products.lua`

!!! note
    You can use the [product generator](https://kristify.madefor.cc/productgen).
    It let's you configure products, with a GUI!

`products.lua` is a lua file which returns a table. This contains the products *(which are tables as well)*.

## Fields

### Display name (`displayName`)

The name of the item you want to sell. This will appear on the monitor

### Price (`price`)

The price per item in krist. If you want multiple items per krist you can set it to a decimal number.
Example: If you want four items per krist then you set it to `0.25`

### Color (`color`)

The color of the Display Name. _**(optional)**_ Can be any color from the color API as string.
Example: "red" or "blue" or nil, for the Themes default preference.
Note: This option can be ignored by the theme.

### Minecraft Item ID (`id`)

The ID of the item you want to sell.

??? example
    `minecraft:dirt`

### Metaname (`metaname`)

The part the customer will pay to (before @name.kst)

### NBT Hash (`nbt`)

NBT Hash of the item *(if it has one)*. This field is optional and can be nil.

??? example
    `704a1bcdf9953c791651a77b1fe78891` (hash of Mending book)
