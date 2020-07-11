console.log("EOP Lazy has been injected :))");

var submitButton = $('button:contains("Hoàn thành")');
var viewAnswerButoon = $('button:contains("Xem đáp án")');

const doAfter = (job, timer) => {
  return new Promise(function (resolve, reject) {
    $("title").html(`Vui lòng đợi ${timer/1000} giây nhóe`);
    timer -= 1000;
    const countDown = setInterval(() => {
      if (timer <= 0) {
        job();
        resolve();
        clearInterval(countDown);
      } else {
        timer -= 1000;
        $("title").html(`Vui lòng đợi ${Math.floor(timer / 1000)} giây nhóe`);
      }
    }, 1000);
  });
};
const listenAudio = async () => {
  let playButtons = $(".fa-play-circle");
  for (let i = 0; i < playButtons.length; ++i) {
    await doAfter(() => playButtons[i].click(), 2000);
    if (i == playButtons.length - 1) {
      await doAfter(() => submitButton.click(), 2000);
    }
  }
};

const autoWrite = async () => {
  let input = $(".dinline");

  input.val("Lazy EOP");

  submitButton.click();
  await doAfter(() => viewAnswerButoon.click(), 30000);
  await doAfter(() => viewAnswerButoon.click(), 1000);

  input.each(function (i, e) {
    $(this).val($(this).attr("placeholder"));
  });
  submitButton.click();
};

const autoListenAndChoose = async () => {
  let answers = $(".dvoca.active > .dans > a > .dtip");
  answers.each(async function () {
    await doAfter(() => $(this).click(), 1000);
  });
};

const autoFill = async () => {
  let answers = $(".ques > div > p > div > ins");

  answers.click();
  submitButton.click();

  await doAfter(() => viewAnswerButoon.click(), 30000);
  await doAfter(() => console.log("waitting"), 3500);

  answers = $(".ques > div > p > div > ins");
  realAnswers = [];
  answers.each(function (i, e) {
    if ($(this).parents().attr("class").includes("checked")) {
      realAnswers.push(i);
    }
  });
  await doAfter(() => viewAnswerButoon.click(), 1000);
  for (let i of realAnswers) {
    answers[i].click();
  }
  submitButton.click();
};

const smartMode = async () => {
  alert("Đéo có đâu, sao lười thế");
};
