(function() {
  'use strict';

  var RECETAS = {
    desayuno: [
      { name: "Tostadas de aguacate y huevo", ingredients: { "Pan integral": 2, "Aguacate": 0.5, "Huevo": 2, "Aceite de oliva": 0.01, "Sal": 0.001 }, macros: { kcal: 420, p: 18, c: 35, g: 22 }, steps: ["Tostar el pan", "Machacar aguacate con sal", "Freír o pochar los huevos", "Montar sobre las tostadas"], time: 10, tags: [] },
      { name: "Yogur con granola y frutos rojos", ingredients: { "Yogur natural": 200, "Granola": 50, "Arándanos": 50, "Miel": 10 }, macros: { kcal: 380, p: 14, c: 55, g: 12 }, steps: ["Poner yogur en bol", "Añadir granola y arándanos", "Rociar miel"], time: 5, tags: ["vegetariana"] },
      { name: "Tortitas de avena y plátano", ingredients: { "Avena": 60, "Plátano": 1, "Huevo": 1, "Leche": 50, "Canela": 0.002 }, macros: { kcal: 450, p: 18, c: 65, g: 10 }, steps: ["Triturar avena y plátano", "Añadir huevo y leche", "Cocinar en sartén 2 min por lado", "Espolvorear canela"], time: 15, tags: ["vegetariana"] },
      { name: "Tostada de tomate y jamón", ingredients: { "Pan integral": 2, "Tomate": 1, "Jamón serrano": 40, "Aceite de oliva": 0.01 }, macros: { kcal: 340, p: 20, c: 30, g: 15 }, steps: ["Tostar pan", "Rallar tomate", "Colocar jamón", "Añadir aceite"], time: 7, tags: [] },
      { name: "Batido verde proteico", ingredients: { "Plátano": 1, "Espinacas": 30, "Leche": 250, "Proteína en polvo": 30, "Mantequilla de cacahuete": 15 }, macros: { kcal: 480, p: 35, c: 50, g: 14 }, steps: ["Añadir todo a batidora", "Triturar 1 minuto", "Servir frío"], time: 5, tags: ["vegetariana"] },
      { name: "Porridge de avena con manzana", ingredients: { "Avena": 70, "Leche": 250, "Manzana": 1, "Canela": 0.002, "Nueces": 15 }, macros: { kcal: 410, p: 12, c: 60, g: 12 }, steps: ["Hervir leche con avena 5 min", "Añadir manzana troceada", "Cocinar 3 min más", "Añadir canela y nueces"], time: 10, tags: ["vegetariana"] }
    ],
    almuerzo: [
      { name: "Pollo al limón con arroz y verduras", ingredients: { "Pechuga de pollo": 150, "Arroz": 80, "Calabacín": 100, "Zanahoria": 80, "Limón": 0.5, "Aceite de oliva": 0.015 }, macros: { kcal: 520, p: 45, c: 60, g: 10 }, steps: ["Cocer arroz 15 min", "Cortar pollo y saltear", "Añadir verduras en juliana", "Exprimir limón al final"], time: 25, tags: ["sin-gluten"] },
      { name: "Lentejas con verduras", ingredients: { "Lentejas": 100, "Cebolla": 0.5, "Zanahoria": 1, "Patata": 1, "Tomate triturado": 100, "Aceite de oliva": 0.015 }, macros: { kcal: 480, p: 22, c: 70, g: 8 }, steps: ["Sofreír cebolla y zanahoria", "Añadir tomate y lentejas", "Cocinar 30 min", "Añadir patata a los 15 min"], time: 35, tags: ["vegana", "vegetariana", "sin-gluten"] },
      { name: "Salmón al horno con patatas", ingredients: { "Salmón": 150, "Patata": 250, "Limón": 0.5, "Aceite de oliva": 0.015, "Ajo": 1 }, macros: { kcal: 550, p: 35, c: 45, g: 22 }, steps: ["Precalentar horno 200°C", "Cortar patatas en rodajas", "Colocar salmón encima", "Hornear 20 min"], time: 30, tags: ["sin-gluten"] },
      { name: "Pasta integral con pavo y espinacas", ingredients: { "Pasta integral": 100, "Pavo en taquitos": 120, "Espinacas": 80, "Tomate cherry": 100, "Aceite de oliva": 0.015 }, macros: { kcal: 540, p: 40, c: 65, g: 12 }, steps: ["Cocer pasta", "Saltear pavo", "Añadir espinacas y tomates", "Mezclar todo"], time: 20, tags: [] },
      { name: "Bowl de quinoa y garbanzos", ingredients: { "Quinoa": 80, "Garbanzos cocidos": 120, "Pepino": 0.5, "Tomate": 1, "Aguacate": 0.5, "Limón": 0.5 }, macros: { kcal: 500, p: 18, c: 65, g: 16 }, steps: ["Cocer quinoa 15 min", "Cortar verduras", "Mezclar todo", "Aliñar con limón y aceite"], time: 25, tags: ["vegana", "vegetariana", "sin-gluten"] },
      { name: "Tortilla de patatas y ensalada", ingredients: { "Patata": 250, "Huevo": 3, "Cebolla": 0.5, "Lechuga": 80, "Tomate": 1, "Aceite de oliva": 0.02 }, macros: { kcal: 520, p: 22, c: 55, g: 22 }, steps: ["Freír patata y cebolla", "Batir huevos", "Mezclar y cuajar en sartén", "Servir con ensalada"], time: 30, tags: ["vegetariana", "sin-gluten"] }
    ],
    cena: [
      { name: "Merluza al horno con verduras", ingredients: { "Merluza": 180, "Pimiento": 1, "Cebolla": 0.5, "Patata": 150, "Aceite de oliva": 0.015 }, macros: { kcal: 420, p: 35, c: 45, g: 10 }, steps: ["Precalentar horno 190°C", "Cortar verduras", "Colocar pescado encima", "Hornear 25 min"], time: 30, tags: ["sin-gluten"] },
      { name: "Ensalada César con pollo", ingredients: { "Pechuga de pollo": 130, "Lechuga romana": 150, "Pan": 30, "Parmesano": 20, "Yogur natural": 30 }, macros: { kcal: 380, p: 40, c: 20, g: 15 }, steps: ["Hacer pollo a la plancha", "Cortar lechuga", "Mezclar yogur con parmesano", "Montar ensalada con pan tostado"], time: 20, tags: [] },
      { name: "Crema de calabaza y jengibre", ingredients: { "Calabaza": 300, "Cebolla": 0.5, "Jengibre": 0.01, "Nata": 50, "Aceite de oliva": 0.01 }, macros: { kcal: 320, p: 6, c: 35, g: 16 }, steps: ["Sofreír cebolla", "Añadir calabaza y agua", "Cocinar 20 min", "Triturar con nata y jengibre"], time: 30, tags: ["vegetariana", "sin-gluten"] },
      { name: "Revuelto de gambas y espárragos", ingredients: { "Gambas": 150, "Espárragos": 100, "Huevo": 3, "Aceite de oliva": 0.015, "Ajo": 1 }, macros: { kcal: 340, p: 32, c: 8, g: 20 }, steps: ["Saltear gambas con ajo", "Añadir espárragos", "Incorporar huevos batidos", "Remover hasta cuajar"], time: 15, tags: ["sin-gluten", "keto"] },
      { name: "Tacos de pavo con aguacate", ingredients: { "Tortillas de maíz": 2, "Pavo picado": 120, "Aguacate": 0.5, "Tomate": 1, "Cebolla": 0.25, "Limón": 0.5 }, macros: { kcal: 450, p: 35, c: 45, g: 15 }, steps: ["Saltear pavo con especias", "Calentar tortillas", "Preparar guacamole", "Montar tacos"], time: 20, tags: ["sin-gluten"] },
      { name: "Berenjenas rellenas de carne", ingredients: { "Berenjena": 1, "Carne picada": 120, "Tomate triturado": 100, "Queso rallado": 30, "Cebolla": 0.5 }, macros: { kcal: 420, p: 35, c: 20, g: 22 }, steps: ["Cortar berenjena y vaciar", "Sofreír carne con cebolla", "Rellenar berenjenas", "Hornear 20 min con queso"], time: 35, tags: ["sin-gluten", "keto"] }
    ],
    snack: [
      { name: "Fruta con yogur", ingredients: { "Manzana": 1, "Yogur natural": 125, "Nueces": 15 }, macros: { kcal: 220, p: 7, c: 28, g: 9 }, steps: ["Cortar fruta", "Mezclar con yogur", "Añadir nueces"], time: 3, tags: ["vegetariana", "sin-gluten"] },
      { name: "Hummus con zanahoria", ingredients: { "Hummus": 80, "Zanahoria": 1, "Pan de pita": 1 }, macros: { kcal: 240, p: 8, c: 35, g: 8 }, steps: ["Cortar zanahoria en palitos", "Servir con hummus", "Acompañar con pan"], time: 5, tags: ["vegana", "vegetariana"] },
      { name: "Tostada de mantequilla de cacahuete", ingredients: { "Pan integral": 1, "Mantequilla de cacahuete": 20, "Plátano": 0.5 }, macros: { kcal: 250, p: 9, c: 30, g: 10 }, steps: ["Tostar pan", "Untar mantequilla", "Añadir plátano en rodajas"], time: 5, tags: ["vegana", "vegetariana"] },
      { name: "Batido de proteínas", ingredients: { "Leche": 250, "Proteína en polvo": 30, "Plátano": 0.5 }, macros: { kcal: 230, p: 30, c: 22, g: 4 }, steps: ["Añadir todo a batidora", "Triturar 30 seg", "Servir"], time: 3, tags: ["vegetariana"] }
    ]
  };

  var excludedFoods = [];
  var fitMode = false;
  var generatedMenu = null;

  function addExclude() {
    var inp = document.getElementById('inp-exclude');
    var val = inp.value.trim().toLowerCase();
    if (val && excludedFoods.indexOf(val) === -1) {
      excludedFoods.push(val);
      renderExcludeChips();
    }
    inp.value = '';
  }

  window.removeExclude = function(food) {
    excludedFoods = excludedFoods.filter(function(f) { return f !== food; });
    renderExcludeChips();
  };

  function renderExcludeChips() {
    var container = document.getElementById('exclude-chips');
    container.innerHTML = excludedFoods.map(function(f) {
      return '<span class="chip">' + f + ' <span class="chip-remove" onclick="removeExclude(\'' + f + '\')"><i class="fa-solid fa-xmark"></i></span></span>';
    }).join('');
  }

  // Toggle del Modo Fit
  document.getElementById('fit-toggle-checkbox').addEventListener('change', function() {
    fitMode = this.checked;
    var fields = document.getElementById('fit-fields');
    
    if (fitMode) {
      fields.classList.remove('hidden');
      fields.style.animation = 'fadeIn 0.4s ease-in';
      console.log('Modo Fit ACTIVADO');
    } else {
      fields.classList.add('hidden');
      console.log('Modo Fit DESACTIVADO');
    }
  });

  function generateMenu() {
    var persons = parseInt(document.getElementById('inp-persons').value) || 2;
    var startDay = document.getElementById('inp-startday').value;
    var budget = parseFloat(document.getElementById('inp-budget').value) || 60;
    var maxTime = parseInt(document.getElementById('inp-time').value) || 45;
    var pref = document.getElementById('inp-pref').value;

    var days = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
    var startIdx = days.indexOf(startDay);
    var weekDays = [];
    for (var i = 0; i < 7; i++) {
      weekDays.push(days[(startIdx + i) % 7]);
    }

    // Si Modo Fit está activo, usar número de comidas personalizado
    var numMeals = fitMode ? parseInt(document.getElementById('fit-meals').value) : 3;
    var mealTypes;
    if (numMeals === 3) mealTypes = ['desayuno','almuerzo','cena'];
    else if (numMeals === 4) mealTypes = ['desayuno','almuerzo','snack','cena'];
    else mealTypes = ['desayuno','almuerzo','snack','cena','snack'];

    var menu = {};
    weekDays.forEach(function(day) {
      menu[day] = {};
      mealTypes.forEach(function(type) {
        var candidates = RECETAS[type].filter(function(r) {
          if (r.time > maxTime) return false;
          if (pref !== 'ninguna' && r.tags.indexOf(pref) === -1) return false;
          for (var ex of excludedFoods) {
            for (var ing of Object.keys(r.ingredients)) {
              if (ing.toLowerCase().indexOf(ex) !== -1) return false;
            }
          }
          return true;
        });
        var chosen = candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : RECETAS[type][Math.floor(Math.random() * RECETAS[type].length)];
        menu[day][type] = Object.assign({}, chosen, { qty: persons });
      });
    });

    var totalKcal = 0, totalP = 0, totalC = 0, totalG = 0;
    weekDays.forEach(function(day) {
      mealTypes.forEach(function(type) {
        var m = menu[day][type];
        totalKcal += m.macros.kcal * persons;
        totalP += m.macros.p * persons;
        totalC += m.macros.c * persons;
        totalG += m.macros.g * persons;
      });
    });

    var shopping = {};
    weekDays.forEach(function(day) {
      mealTypes.forEach(function(type) {
        var m = menu[day][type];
        Object.entries(m.ingredients).forEach(function(entry) {
          var ing = entry[0], qty = entry[1];
          if (!shopping[ing]) shopping[ing] = 0;
          shopping[ing] += qty * persons;
        });
      });
    });

    var prices = {
      "Pan integral": 1.5, "Aguacate": 1.2, "Huevo": 0.2, "Aceite de oliva": 0.1, "Sal": 0.01,
      "Yogur natural": 0.8, "Granola": 2.5, "Arándanos": 3, "Miel": 0.3, "Avena": 0.4,
      "Plátano": 0.3, "Leche": 0.9, "Canela": 0.05, "Proteína en polvo": 1.5, "Mantequilla de cacahuete": 1,
      "Manzana": 0.4, "Nueces": 1.2, "Pechuga de pollo": 3.5, "Arroz": 0.5, "Calabacín": 1,
      "Zanahoria": 0.5, "Limón": 0.3, "Lentejas": 1, "Cebolla": 0.3, "Patata": 0.6,
      "Tomate triturado": 1, "Tomate": 0.5, "Salmón": 5, "Ajo": 0.1, "Pasta integral": 1,
      "Pavo en taquitos": 3, "Espinacas": 1.5, "Tomate cherry": 1.5, "Quinoa": 2,
      "Garbanzos cocidos": 1.5, "Pepino": 0.8, "Lechuga": 1, "Lechuga romana": 1.2,
      "Parmesano": 1.5, "Pan": 1.5, "Merluza": 4, "Pimiento": 1, "Nata": 1,
      "Calabaza": 2, "Jengibre": 0.3, "Gambas": 5, "Espárragos": 2.5,
      "Tortillas de maíz": 1.5, "Pavo picado": 3, "Berenjena": 1.5, "Carne picada": 4,
      "Queso rallado": 1.5, "Hummus": 2, "Pan de pita": 1, "Jamón serrano": 3
    };

    var totalCost = 0;
    Object.entries(shopping).forEach(function(entry) {
      var ing = entry[0], qty = entry[1];
      var price = prices[ing] || 1.5;
      totalCost += qty * price;
    });

    generatedMenu = { 
      menu: menu, weekDays: weekDays, mealTypes: mealTypes, shopping: shopping, 
      totalCost: totalCost, totalKcal: totalKcal, totalP: totalP, totalC: totalC, totalG: totalG, 
      persons: persons, budget: budget, pref: pref, maxTime: maxTime, fitMode: fitMode 
    };

    document.getElementById('results-section').classList.remove('hidden');
    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
    renderTab('menu');
  }

  function renderTab(tab) {
    var container = document.getElementById('tab-content');
    if (!generatedMenu) return;
    var menu = generatedMenu.menu, weekDays = generatedMenu.weekDays, mealTypes = generatedMenu.mealTypes;
    var shopping = generatedMenu.shopping, totalCost = generatedMenu.totalCost, totalKcal = generatedMenu.totalKcal;
    var totalP = generatedMenu.totalP, totalC = generatedMenu.totalC, totalG = generatedMenu.totalG;
    var persons = generatedMenu.persons, budget = generatedMenu.budget, fitModeLocal = generatedMenu.fitMode;

    if (tab === 'menu') {
      var html = '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">';
      weekDays.forEach(function(day) {
        var dayKcal = mealTypes.reduce(function(s, t) { return s + menu[day][t].macros.kcal; }, 0);
        html += '<div class="meal-card bg-white rounded-2xl p-5 shadow"><div class="flex items-center justify-between mb-3">';
        html += '<h4 class="font-bold text-lg text-slate-800 capitalize"><i class="fa-solid fa-calendar-day text-emerald-500 mr-2"></i>' + day + '</h4>';
        html += '<span class="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">' + dayKcal + ' kcal</span></div><div class="space-y-2">';
        mealTypes.forEach(function(type) {
          var m = menu[day][type];
          var icon = type === 'desayuno' ? 'fa-mug-hot' : type === 'almuerzo' ? 'fa-bowl-food' : type === 'cena' ? 'fa-moon' : 'fa-cookie-bite';
          html += '<div class="flex items-start gap-2 p-2 rounded-lg bg-slate-50"><i class="fa-solid ' + icon + ' text-emerald-500 mt-1"></i><div class="flex-1">';
          html += '<div class="text-xs text-slate-500 uppercase font-semibold">' + type + '</div>';
          html += '<div class="font-medium text-slate-800">' + m.name + '</div>';
          html += '<div class="text-xs text-slate-500">' + m.macros.kcal + ' kcal · ' + m.time + ' min</div></div></div>';
        });
        html += '</div></div>';
      });
      html += '</div>';
      container.innerHTML = html;
    }
    else if (tab === 'recipes') {
      var html = '<div class="space-y-4 scrollbar-thin max-h-[600px] overflow-y-auto pr-2">';
      var seen = new Set();
      weekDays.forEach(function(day) {
        mealTypes.forEach(function(type) {
          var m = menu[day][type];
          if (seen.has(m.name)) return;
          seen.add(m.name);
          html += '<div class="bg-white rounded-2xl p-5 shadow"><h4 class="font-bold text-lg text-slate-800 mb-2">' + m.name + '</h4>';
          html += '<div class="flex flex-wrap gap-2 mb-3"><span class="chip"><i class="fa-solid fa-clock"></i> ' + m.time + ' min</span>';
          html += '<span class="chip"><i class="fa-solid fa-fire"></i> ' + m.macros.kcal + ' kcal</span>';
          html += '<span class="chip"><i class="fa-solid fa-drumstick-bite"></i> P: ' + m.macros.p + 'g</span>';
          html += '<span class="chip"><i class="fa-solid fa-bread-slice"></i> C: ' + m.macros.c + 'g</span>';
          html += '<span class="chip"><i class="fa-solid fa-droplet"></i> G: ' + m.macros.g + 'g</span></div>';
          html += '<div class="mb-3"><h5 class="font-semibold text-slate-700 mb-1"><i class="fa-solid fa-basket-shopping text-emerald-500"></i> Ingredientes</h5><ul class="text-sm text-slate-600 space-y-0.5">';
          Object.entries(m.ingredients).forEach(function(entry) {
            var ing = entry[0], qty = entry[1];
            var display = qty >= 1 ? qty.toFixed(0) : (qty*1000).toFixed(0) + 'ml/g';
            html += '<li>· ' + display + ' ' + ing + '</li>';
          });
          html += '</ul></div><div><h5 class="font-semibold text-slate-700 mb-1"><i class="fa-solid fa-list-ol text-emerald-500"></i> Preparación</h5><ol class="text-sm text-slate-600 space-y-1">';
          m.steps.forEach(function(s, i) { html += '<li><span class="font-bold text-emerald-600">' + (i+1) + '.</span> ' + s + '</li>'; });
          html += '</ol></div></div>';
        });
      });
      html += '</div>';
      container.innerHTML = html;
    }
    else if (tab === 'macros') {
      var dailyKcal = totalKcal / 7, dailyP = totalP / 7, dailyC = totalC / 7, dailyG = totalG / 7;
      var pPct = (dailyP * 4 / dailyKcal * 100).toFixed(0), cPct = (dailyC * 4 / dailyKcal * 100).toFixed(0), gPct = (dailyG * 9 / dailyKcal * 100).toFixed(0);
      var html = '<div class="grid md:grid-cols-2 gap-6"><div class="bg-white rounded-2xl p-6 shadow">';
      html += '<h4 class="font-bold text-slate-800 mb-4"><i class="fa-solid fa-chart-pie text-emerald-500 mr-2"></i>Resumen diario (por persona)</h4>';
      html += '<div class="text-4xl font-bold gradient-text mb-4">' + dailyKcal.toFixed(0) + ' kcal</div><div class="space-y-3">';
      html += '<div><div class="flex justify-between text-sm mb-1"><span class="font-semibold text-rose-600">Proteínas</span><span>' + dailyP.toFixed(0) + 'g (' + pPct + '%)</span></div><div class="macro-bar"><div class="macro-fill bg-rose-500" style="width:' + pPct + '%"></div></div></div>';
      html += '<div><div class="flex justify-between text-sm mb-1"><span class="font-semibold text-amber-600">Carbohidratos</span><span>' + dailyC.toFixed(0) + 'g (' + cPct + '%)</span></div><div class="macro-bar"><div class="macro-fill bg-amber-500" style="width:' + cPct + '%"></div></div></div>';
      html += '<div><div class="flex justify-between text-sm mb-1"><span class="font-semibold text-sky-600">Grasas</span><span>' + dailyG.toFixed(0) + 'g (' + gPct + '%)</span></div><div class="macro-bar"><div class="macro-fill bg-sky-500" style="width:' + gPct + '%"></div></div></div>';
      html += '</div></div><div class="bg-white rounded-2xl p-6 shadow"><h4 class="font-bold text-slate-800 mb-4"><i class="fa-solid fa-calendar-week text-emerald-500 mr-2"></i>Calorías por día</h4><div class="space-y-2">';
      weekDays.forEach(function(day) {
        var dk = mealTypes.reduce(function(s, t) { return s + menu[day][t].macros.kcal; }, 0);
        var pct = (dk / (dailyKcal * 1.2) * 100).toFixed(0);
        html += '<div><div class="flex justify-between text-sm mb-1"><span class="font-semibold capitalize">' + day + '</span><span>' + dk + ' kcal</span></div>';
        html += '<div class="macro-bar"><div class="macro-fill bg-gradient-to-r from-emerald-400 to-teal-500" style="width:' + pct + '%"></div></div></div>';
      });
      html += '</div></div></div>';
      if (fitModeLocal) {
        var targetCal = parseInt(document.getElementById('fit-cal').value);
        var targetP = parseInt(document.getElementById('fit-protein').value);
        var targetC = parseInt(document.getElementById('fit-carbs').value);
        var targetG = parseInt(document.getElementById('fit-fat').value);
        html += '<div class="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">';
        html += '<h4 class="font-bold text-slate-800 mb-3"><i class="fa-solid fa-bullseye text-emerald-600 mr-2"></i>Objetivo Modo Fit</h4>';
        html += '<div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">';
        html += '<div><div class="text-xs text-slate-600">Calorías</div><div class="font-bold text-lg">' + dailyKcal.toFixed(0) + ' / ' + targetCal + '</div></div>';
        html += '<div><div class="text-xs text-slate-600">Proteínas</div><div class="font-bold text-lg">' + dailyP.toFixed(0) + 'g / ' + targetP + 'g</div></div>';
        html += '<div><div class="text-xs text-slate-600">Carbos</div><div class="font-bold text-lg">' + dailyC.toFixed(0) + 'g / ' + targetC + 'g</div></div>';
        html += '<div><div class="text-xs text-slate-600">Grasas</div><div class="font-bold text-lg">' + dailyG.toFixed(0) + 'g / ' + targetG + 'g</div></div>';
        html += '</div></div>';
      }
      container.innerHTML = html;
    }
    else if (tab === 'shopping') {
      var categories = {
        "🥬 Verduras y frutas": ["Aguacate","Plátano","Manzana","Arándanos","Calabacín","Zanahoria","Limón","Tomate","Tomate cherry","Cebolla","Ajo","Pimiento","Calabaza","Berenjena","Pepino","Lechuga","Lechuga romana","Espinacas","Espárragos","Jengibre"],
        " Proteínas": ["Huevo","Pechuga de pollo","Salmón","Pavo en taquitos","Pavo picado","Merluza","Gambas","Carne picada","Jamón serrano","Proteína en polvo"],
        "🌾 Cereales y legumbres": ["Pan integral","Pan","Avena","Arroz","Lentejas","Pasta integral","Quinoa","Granola","Garbanzos cocidos","Tortillas de maíz","Pan de pita"],
        "🥛 Lácteos": ["Leche","Yogur natural","Nata","Parmesano","Queso rallado"],
        " Frutos secos y grasas": ["Nueces","Mantequilla de cacahuete","Aceite de oliva"],
        "🧂 Otros": ["Miel","Canela","Sal","Tomate triturado","Hummus"]
      };
      var html = '<div class="space-y-4">';
      Object.entries(categories).forEach(function(entry) {
        var cat = entry[0], items = entry[1];
        var catItems = Object.entries(shopping).filter(function(e) { return items.indexOf(e[0]) !== -1; });
        if (catItems.length === 0) return;
        html += '<div class="bg-white rounded-2xl p-5 shadow"><h4 class="font-bold text-slate-800 mb-3">' + cat + '</h4><div class="grid md:grid-cols-2 gap-2">';
        catItems.forEach(function(e) {
          var ing = e[0], qty = e[1];
          var unit = qty >= 1 ? (qty % 1 === 0 ? qty + ' uds' : qty.toFixed(1) + ' uds') : (qty*1000).toFixed(0) + ' g/ml';
          html += '<div class="flex items-center justify-between p-2 rounded-lg bg-slate-50"><span class="text-slate-700">' + ing + '</span><span class="font-semibold text-emerald-600">' + unit + '</span></div>';
        });
        html += '</div></div>';
      });
      html += '</div>';
      container.innerHTML = html;
    }
    else if (tab === 'cost') {
      var prices = { "Pan integral": 1.5, "Aguacate": 1.2, "Huevo": 0.2, "Aceite de oliva": 6, "Sal": 0.5, "Yogur natural": 0.8, "Granola": 4, "Arándanos": 4, "Miel": 4, "Avena": 2, "Plátano": 0.3, "Leche": 0.9, "Canela": 2, "Proteína en polvo": 25, "Mantequilla de cacahuete": 4, "Manzana": 0.4, "Nueces": 6, "Pechuga de pollo": 7, "Arroz": 1.5, "Calabacín": 1.5, "Zanahoria": 1, "Limón": 0.5, "Lentejas": 2, "Cebolla": 0.5, "Patata": 1, "Tomate triturado": 1.5, "Tomate": 1, "Salmón": 12, "Ajo": 0.5, "Pasta integral": 1.5, "Pavo en taquitos": 5, "Espinacas": 2, "Tomate cherry": 2.5, "Quinoa": 4, "Garbanzos cocidos": 2, "Pepino": 1, "Lechuga": 1.5, "Lechuga romana": 2, "Parmesano": 4, "Pan": 1.5, "Merluza": 8, "Pimiento": 1.5, "Nata": 2, "Calabaza": 2.5, "Jengibre": 2, "Gambas": 10, "Espárragos": 4, "Tortillas de maíz": 2.5, "Pavo picado": 5, "Berenjena": 2, "Carne picada": 6, "Queso rallado": 3, "Hummus": 3, "Pan de pita": 2, "Jamón serrano": 6 };
      var html = '<div class="grid md:grid-cols-2 gap-6"><div class="bg-white rounded-2xl p-6 shadow"><h4 class="font-bold text-slate-800 mb-4"><i class="fa-solid fa-receipt text-emerald-500 mr-2"></i>Desglose de costes</h4><div class="space-y-2 max-h-96 overflow-y-auto scrollbar-thin">';
      var totalCostItems = Object.entries(shopping).map(function(e) { var ing = e[0], qty = e[1]; var price = prices[ing] || 2; return { ing: ing, qty: qty, cost: qty * price }; }).sort(function(a, b) { return b.cost - a.cost; });
      totalCostItems.forEach(function(item) { html += '<div class="flex justify-between items-center p-2 rounded-lg bg-slate-50 text-sm"><span class="text-slate-700">' + item.ing + '</span><span class="font-semibold text-emerald-600">' + item.cost.toFixed(2) + '€</span></div>'; });
      html += '</div></div><div class="space-y-4"><div class="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 shadow text-white"><div class="text-sm opacity-90">Coste total estimado</div><div class="text-4xl font-bold">' + totalCost.toFixed(2) + '€</div><div class="text-sm opacity-90 mt-2">para ' + persons + ' persona(s) · 7 días</div></div>';
      html += '<div class="bg-white rounded-2xl p-6 shadow"><div class="text-sm text-slate-600 mb-1">Coste por persona / día</div><div class="text-2xl font-bold text-slate-800">' + (totalCost / persons / 7).toFixed(2) + '€</div></div>';
      html += '<div class="bg-white rounded-2xl p-6 shadow"><div class="text-sm text-slate-600 mb-1">Presupuesto</div><div class="text-2xl font-bold text-slate-800">' + budget + '€</div>';
      var barWidth = Math.min(totalCost/budget*100, 100), barColor = totalCost > budget ? 'bg-rose-500' : 'bg-emerald-500';
      html += '<div class="mt-2 macro-bar"><div class="macro-fill ' + barColor + '" style="width:' + barWidth + '%"></div></div>';
      var statusText = totalCost > budget ? '⚠️ Supera el presupuesto en ' + (totalCost-budget).toFixed(2) + '€' : '✅ Dentro del presupuesto';
      var statusColor = totalCost > budget ? 'text-rose-600' : 'text-emerald-600';
      html += '<div class="text-xs mt-1 ' + statusColor + ' font-semibold">' + statusText + '</div></div></div></div>';
      container.innerHTML = html;
    }
  }

  function exportPDF() {
    if (!generatedMenu) return;
    try {
      var jsPDF = window.jspdf.jsPDF;
      var doc = new jsPDF();
      var menu = generatedMenu.menu, weekDays = generatedMenu.weekDays, mealTypes = generatedMenu.mealTypes;
      var shopping = generatedMenu.shopping, totalCost = generatedMenu.totalCost, persons = generatedMenu.persons;
      doc.setFontSize(20); doc.setTextColor(16, 185, 129);
      doc.text("FitMenu - Menú Semanal", 20, 20);
      doc.setFontSize(10); doc.setTextColor(100);
      doc.text("Para " + persons + " persona(s) · Coste: " + totalCost.toFixed(2) + "€", 20, 28);
      var y = 40;
      weekDays.forEach(function(day) {
        if (y > 260) { doc.addPage(); y = 20; }
        doc.setFontSize(14); doc.setTextColor(16, 185, 129);
        doc.text(day.charAt(0).toUpperCase() + day.slice(1), 20, y); y += 8;
        doc.setFontSize(10); doc.setTextColor(60);
        mealTypes.forEach(function(type) {
          var m = menu[day][type];
          doc.text("• " + type + ": " + m.name + " (" + m.macros.kcal + " kcal)", 25, y); y += 6;
        });
        y += 4;
      });
      doc.addPage(); doc.setFontSize(16); doc.setTextColor(16, 185, 129);
      doc.text("Lista de la compra", 20, 20); y = 30;
      doc.setFontSize(10); doc.setTextColor(60);
      Object.entries(shopping).forEach(function(e) {
        var ing = e[0], qty = e[1];
        if (y > 280) { doc.addPage(); y = 20; }
        var unit = qty >= 1 ? qty.toFixed(1) + " uds" : (qty*1000).toFixed(0) + " g/ml";
        doc.text("• " + ing + ": " + unit, 20, y); y += 6;
      });
      doc.save('fitmenu-semanal.pdf');
    } catch (err) { alert("Error al generar PDF: " + err.message); }
  }

  function copyList() {
    if (!generatedMenu) return;
    var menu = generatedMenu.menu, weekDays = generatedMenu.weekDays, mealTypes = generatedMenu.mealTypes;
    var shopping = generatedMenu.shopping, totalCost = generatedMenu.totalCost, persons = generatedMenu.persons;
    var text = " FITMENU - Menú Semanal (" + persons + " personas)\n\n";
    weekDays.forEach(function(day) {
      text += " " + day.toUpperCase() + "\n";
      mealTypes.forEach(function(type) { text += "  • " + type + ": " + menu[day][type].name + " (" + menu[day][type].macros.kcal + " kcal)\n"; });
      text += "\n";
    });
    text += "🛒 LISTA DE LA COMPRA\n";
    Object.entries(shopping).forEach(function(e) {
      var ing = e[0], qty = e[1];
      var unit = qty >= 1 ? qty.toFixed(1) + " uds" : (qty*1000).toFixed(0) + " g/ml";
      text += "  • " + ing + ": " + unit + "\n";
    });
    text += "\n Coste estimado: " + totalCost.toFixed(2) + "€\n";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        var btn = document.getElementById('btn-copy');
        var orig = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i> ¡Copiado!';
        btn.classList.remove('bg-sky-500'); btn.classList.add('bg-emerald-500');
        setTimeout(function() { btn.innerHTML = orig; btn.classList.remove('bg-emerald-500'); btn.classList.add('bg-sky-500'); }, 2000);
      });
    } else {
      var textarea = document.createElement('textarea');
      textarea.value = text; document.body.appendChild(textarea); textarea.select();
      document.execCommand('copy'); document.body.removeChild(textarea);
      alert("¡Lista copiada!");
    }
  }

  function init() {
    console.log('FitMenu: Inicializando...');
    
    document.getElementById('btn-add-exclude').addEventListener('click', addExclude);
    document.getElementById('inp-exclude').addEventListener('keydown', function(e) { if (e.key === 'Enter') addExclude(); });
    document.getElementById('btn-generate').addEventListener('click', generateMenu);
    document.getElementById('btn-pdf').addEventListener('click', exportPDF);
    document.getElementById('btn-copy').addEventListener('click', copyList);

    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderTab(btn.dataset.tab);
      });
    });

    console.log('FitMenu: Inicialización completa');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
