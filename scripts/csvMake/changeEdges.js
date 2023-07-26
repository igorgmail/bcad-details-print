function changeEdges(array) {
  const kr1 = '⎯⎯⎯';
  const kr2 = '- - -';
  const addKromkaArray = array.map((el) => {
    el.A_kromka = [];
    el.B_kromka = [];
    if (!el?.edges || el?.edges === 'Нет') return el;

    // Проходим по А размеру при двух кромках Н В
    if (/Н.+В/g.test(el.edges)) {
      if (el.B - el.b === 4) {
        el.A_kromka.push(kr2, kr2);
      }
      if (el.B - el.b === 2) {
        el.A_kromka.push(kr1, kr2);
      }
      if (el.B - el.b === 0) {
        el.A_kromka.push(kr1, kr1);
      }
    }
    // Проходим по А размеру при одной кромке Н или В
    if ((/Н/g.test(el.edges) && !/В/g.test(el.edges)) || (/В/g.test(el.edges) && !/Н/g.test(el.edges))) {
      if (el.B - el.b === 2) {
        el.A_kromka.push(kr2);
      }
      if (el.B - el.b === 0) {
        el.A_kromka.push(kr1);
      }
    }

    // Проходим по размеру B при двух кромках Л П

    if (/Л.+П/g.test(el.edges)) {
      if (el.A - el.a === 4) {
        el.B_kromka.push(kr2, kr2);
      }
      if (el.A - el.a === 2) {
        el.B_kromka.push(kr1, kr2);
      }
      if (el.A - el.a === 0) {
        el.B_kromka.push(kr1, kr1);
      }
    }

    // Проходим по B размеру при одной кромке Л или П
    if ((/Л/g.test(el.edges) && !/П/g.test(el.edges)) || (/П/g.test(el.edges) && !/Л/g.test(el.edges))) {
      if (el.A - el.a === 2) {
        el.B_kromka.push(kr2);
      }
      if (el.A - el.a === 0) {
        el.B_kromka.push(kr1);
      }
    }

    return el;
  });
  return addKromkaArray;
}

module.exports = changeEdges;