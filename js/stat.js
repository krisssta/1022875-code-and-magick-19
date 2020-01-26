'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var INDENT = 55;
var BAR_BASE_Y = 250;
var BAR_GAP = 50;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var baseText = BAR_BASE_Y + 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'Bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + INDENT + i * (BAR_WIDTH + BAR_GAP), times[i] * BAR_HEIGHT / maxTime + BAR_BASE_Y - 10);
    ctx.fillText(names[i], CLOUD_X + INDENT + i * (BAR_WIDTH + BAR_GAP), baseText);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, ' + 100 * Math.random() + '%, 35%)';
    }
    ctx.fillRect(CLOUD_X + INDENT + i * (BAR_WIDTH + BAR_GAP), BAR_BASE_Y, BAR_WIDTH, times[i] * BAR_HEIGHT / maxTime);
  }
};
