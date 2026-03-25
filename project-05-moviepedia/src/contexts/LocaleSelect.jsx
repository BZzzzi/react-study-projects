import { useLocale, useSetLocale } from "./LocaleContext";

function LocaleSelect({ className = "" }) {
  const locale = useLocale();
  const setLocale = useSetLocale();

  return (
    <select
      value={locale}
      onChange={(e) => {
        setLocale(e.target.value);
      }}
      className={className}
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}
export default LocaleSelect;
