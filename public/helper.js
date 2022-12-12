export function totalAnalysis(values) {
  const tchanges = values[1] > 0 ? 'افزایش' : 'کاهش';
  const wchanges = values[3] > 0 ? 'افزایش' : 'کاهش';

  return `امروز شاخص کل بورس نسبت به روز گذشته با ${values[1]} میزان ${tchanges} به سطح ${values[0]} واحد رسید. و همچنین شاخص هم وزن با ${values[3]} میزان ${wchanges} به سطح ${values[2]} واحد رسید.`;
}
