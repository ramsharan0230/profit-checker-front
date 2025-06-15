import Papa from "papaparse";

export async function renderBom() {
  const res = await fetch("/bom.csv");
  const text = await res.text();

  const { data } = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  });

  return data;
}
    