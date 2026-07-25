# How to Change the Logo

## 1. Add your image file

- Put your new logo image in: **`public/images/`**
- Example: `public/images/deanauto3.jpeg`  
  (Use lowercase names like `deanauto3.jpeg` for consistency.)

## 2. Hero logo (big logo on the blue section)

- **File:** `components/Hero.tsx`
- **Find:** the `<img>` tag with `src="/images/..."`
- **Change:** update the filename to match your image, e.g.  
  `src="/images/deanauto3.jpeg"`  
  Use whatever filename you put in `public/images/` (e.g. `mylogo.png` → `src="/images/mylogo.png"`).

## 3. Favicon (browser tab icon) – optional

If you want the browser tab icon to use the same (or another) image:

- **File:** `app/layout.tsx`
- **Find:** `icons` and any `images` that use `/images/deanauto.png`
- **Change:** replace `deanauto.png` with your filename, e.g. `deanauto3.jpeg`.

## 4. Rebuild and deploy

After editing:

```bash
./deploy.sh YOUR_SERVER_IP
```

(Or run `npm run build` locally to test.)

---

**Summary:** Add the image to `public/images/`, then in `Hero.tsx` set the hero `<img src="/images/YourFilename.ext">` to match. Optionally update `layout.tsx` for the favicon.
