# Products.lua spec

Here is the specification for products.lua

!!! 👉 Note: 
    You can use the [product generator](https://kristify.madefor.cc/productgen).
    It let's you configure products, with a GUI!

Products.lua is a lua file which returns a table, which contains products (which are tables).

## Fields

### Display name (`displayName`)

The name of the item you want to sell. This will appear on the monitor

### Price (`price`)

The price per item in krist. If you want multiple items per krist you can set it to a decimal number.
Example: If you want four items per krist then you set it to `0.25`

### Minecraft name (`id`)

The ID of the item you want to sell.

??? example
    `minecraft:dirt`

### Metaname (`metaname`)

The part the customer will pay to (before @name.kst)
