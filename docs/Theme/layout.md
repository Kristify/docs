# Layout

Kristify loads the whole layout of a theme from `<kristify>/data/pages/...`. A theme can add as much stuff as it wants there. **But two files have to always exists:**

 * `index.xml`
 * `widget.xml`

Index is the main layout. It renders the whole content of the monitor, Except:
Widgets. Those display the products *(one each)*.

---

## XML variant

As you can see, they are written in the xml format. Thats one of the benefits by Basalt. (See [their docs](https://basalt.madefor.cc/#/tips/xml)).  
If you don't like xml or need something more powerfull, then you can use a lua script!

When Kristify loads `index` or `widget`, it first looks for a corresponding `.lua` file. If it can't find one, it then searches for a `.xml` variant.

## Lua variant

While `.xml` files are the same just like basalt defined them, those lua files are loaded a bit differently.
Here is an example of how you would create a empty frame for in `index.lua`:

```lua
local ctx = ({ ... })[1] -- Context of Kristify; Contains many usefull informations like the configs or other loaded libs.
local base = ({ ... })[2] -- The base frame for the interface. We will load our layout in that one!
local basalt = ctx.basalt -- Basalt framework. Instead of loading our own, we use the one Kristify reccomends.

local index = base:addFrame("_app") -- Create our frame with the "_app" id.
  :setSize("parent.w","parent.h") -- Give it the same size as their parent, aka the base frame.
--:addLayout(fs.combine(ctx.path.page, "index.xml")) -- Would load the index.xml file into our frame from the pages folder.
return index -- Return our frame to Kristify for further usage.
```

---

## IDs

As you can see, we gave the frame the `"_app"` ID. Basalt objects have IDs that are used internally to find specific objects. Kristify has some common ids, used to load specific informations like the shop title. Those begin with a underscore!

Here is a table with some standard IDs, used by Kristify:

### Index
| ID            | Object type | Description                                                                   |
|---------------|-------------|-------------------------------------------------------------------------------|
| `_app`          | **frame**       | Root of index.                                                                |
| `_body`         | **frame**       | Contains widget's *(e.g. "_widget_1")*.                                         |
| `_head`         | **frame**       | Normally contains `_title`, `_title_end` & `_subtitle`.                             |
| `_title`        | **label**       | The shops name.                                                               |
| `_title_end`    | **label**       | Top-Lvl domain *(normalyl .kst)*.                                               |
| `_watermark`    | **label**       | Our Name! You could remove it, but it would be really nice if you keep it. **<3** |
| `_subtitle`     | **label**       | Shops description. *(aka tagline)*                                              |
| `_importantMSG` | **label**       | E.g. *"pay to <metaname>@switchcraft.kst for a purchase"*                       |
| `_navigation`   | **frame**       | Normally contains the three following Objects:                                |
| `_navBack`      | **button**      | Go one page back, if available.                                               |
| `_navNext`      | **button**      | Go to the next page, if available.                                            |
| `_curPage`      | **button**      | Shows the current pages number.                                               |

### Widget
| ID        | Object type | Description                                         |
|-----------|-------------|-----------------------------------------------------|
| `_widget`   | **frame**       | Root of widget. *(in production: e.g. "_widget_1")* |
| `_name`     | **label**       | The name of a product.                              |
| `_stock`    | **label**       | How much the shop has left. *(aka amount)*          |
| `_metaname` | **label**       | The metaname *(e.g. "iron" @...)*                   |
| `_price`    | **button**      | The price tag *(e.g. "2kst")*                       |

!!! note
    Those obejcts don't have to be included, but it is generally recommended.

If you need some more reference material, feel free to look at the default themes as they use a somewhat standard.

If you make your own theme and need to find something specific to your theme, we recommend to use `__` before every ID.