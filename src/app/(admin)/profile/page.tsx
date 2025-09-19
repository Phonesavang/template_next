"use client";
import { formatDate, notification } from "~/usehooks/global";
export default function page() {
  const date = new Date();
  return (
    <div className="container max-auto px-8 mt-5">
      <h2>hello ສະບາຍດີ {formatDate(date)}</h2>
      <button onClick={() => notification("success", "Button clicked!", 3000)}>
        Click me
      </button>
    </div>
  );
}
