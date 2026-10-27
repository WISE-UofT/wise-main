# ui folder

This folder holds small UI pieces of the site that get reused. Each file is one piece. They only handle how something looks and moves. The words and photos they show come from `src/data/content.ts` and `src/data/assets.ts`.

To use one on a page, import it at the top and drop it in like a normal tag:

```
import Marquee from "@/components/ui/Marquee";

<Marquee />
```

## What is in here

**BubbleCard.tsx**
The round glass bubbles in the initiatives section on the home page. Takes `item` (one entry from `INITIATIVES`) and `index` (its spot in the row, used to stagger them). Clicking one goes to the initiatives page. To change the words, edit `INITIATIVES` in `content.ts`, not this file.

**StatCounter.tsx**
A number that counts up when you scroll to it. Takes `value` (the number to count to), `suffix` (extra text after the number, like `"+"`), and `label` (the small caption under it). Used for the "90+ members" stats on the home page.

```
<StatCounter value={90} suffix="+" label="Active Members" />
```

**Marquee.tsx**
The endless scrolling strip of words under the home page hero. It reads its words from `MARQUEE_ITEMS` in `content.ts`. To change the words, edit that list. Takes no props.

**MultiOrbCluster.tsx**
The cluster of floating photo bubbles next to the stats on the home page. The bubbles drift a little as you scroll. Only shows on desktop (hidden on phones). Takes no props. To swap a photo, change the imports at the top of the file.

**PhotoStack.tsx**
The stack of photos in the home page hero. Click (or tap) it to flip to the next photo. To change which photos are in the stack, edit the `photos` list at the top of the file.

**FloatingBunny.tsx**
A small floating picture, used as decoration on the team and events pages. Takes `src` (the picture), `size` (how big in pixels), `bottom` and `right` (where it sits), `rotate` (tilt), and `delay` (so two of them don't bob in sync). All except `src` have defaults.

```
<FloatingBunny src={bunnyJpeg} size={72} rotate={6} />
```

## Rules of thumb

- Words and photos live in `src/data/`. Layout and motion live here. If you only want to change text, you should never need to open this folder.
- If you copy one of these onto a new page, copy its import line too or the build will fail.
- These all use `motion` from `motion/react` for animation. Plain CSS would work fine for most of them if you ever want to simplify one.
