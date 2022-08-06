function isScrolledIntoView(container, section) {
  var containerTop = container.getBoundingClientRect().top;
  var sectionBottom = section.getBoundingClientRect().bottom;

  var isVisible = (containerTop <= 0) && ((sectionBottom) >= window.innerHeight);
  return isVisible;
}

function horizontalScroll(frameID, direction) {
  var frame = document.getElementById(frameID);
  var container = frame.parentElement.parentElement;
  var section = container.parentElement;

  container.style.height = (frame.children.length * 100) + "vw"

  var rect = container.getBoundingClientRect();
  var elemTop = rect.top;
  if (direction == undefined || direction == "left") {
    if (isScrolledIntoView(container, section)) {
      frame.style.transform = "translateX(" + Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * -1) / rect.height * 100 * (frame.children.length + .16)), 0), ((frame.children.length - 1) * -100)) + "%)";
    } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
      frame.style.transform = "translateX(0%)"
    } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
      frame.style.transform = "translateX(" + ((frame.children.length - 1) * -100) + "%)"
    }
  } else if (direction == "right") {
    if (isScrolledIntoView(container, section)) {
      frame.style.transform = "translateX(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * -1) / rect.height * 100 * (frame.children.length + .16)), 0), ((frame.children.length - 1) * -100)) * -1) + "%)";
    } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
      frame.style.transform = "translateX(0%)"
    } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
      frame.style.transform = "translateX(" + ((frame.children.length - 1) * 100) + "%)"
    }
  }
}

function transformScroll(frameID, element, minSize, maxSize, decrementer, direction, transform, unit, minSize1, maxSize1, decrementer1, direction1, transform1, unit1, minSize2, maxSize2, decrementer2, direction2, transform2, unit2, minSize3, maxSize3, decrementer3, direction3, transform3, unit3, minSize4, maxSize4, decrementer4, direction4, transform4, unit4, minSize5, maxSize5, decrementer5, direction5, transform5, unit5) {
  // elements
  var frame = document.getElementById(frameID);
  var container = frame.parentElement.parentElement;
  var section = container.parentElement;

  // transform hold
  var transformHold = "";
  var transformHold1 = "";
  var transformHold2 = "";
  var transformHold3 = "";
  var transformHold4 = "";
  var transformHold5 = "";


  // transformVars
  var transformVar;
  var unitVar;
  var transformVar1 = transform1;
  var unitVar1 = unit1;
  var transformVar2 = transform2;
  var unitVar2 = unit2;
  var transformVar3 = transform3;
  var unitVar3 = unit3;
  var transformVar4 = transform4;
  var unitVar4 = unit4;
  var transformVar5 = transform5;
  var unitVar5 = unit5;

  container.style.height = "200vw"

  if (element == undefined) {
    var frameContent = frame.querySelector(".scroller-item")
  } else if (element != undefined) {
    var frameContent = frame.querySelector(element)
  }

  if (transform == undefined || transform == null) {
    transformVar = "scale"
  } else if (transform != undefined) {
    transformVar = transform
  }

  if (unit == undefined || unit == null) {
    unitVar = "%";
  } else if (unit != undefined) {
    unitVar = unit;
  }

  var rect = container.getBoundingClientRect();
  var elemTop = rect.top;
  if (direction == "forwards" || direction == undefined) {
    if (isScrolledIntoView(container, section)) {
      transformHold = transformVar + "(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((maxSize - minSize) / 70)), maxSize), minSize) / decrementer) + unitVar + ")";
    } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
      transformHold = transformVar + "(" + (minSize / decrementer) + unitVar + ")"
    } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
      transformHold = transformVar + "(" + (maxSize / decrementer) + unitVar + ")"
    }
  } else if (direction == "backwards") {
    if (isScrolledIntoView(container, section)) {
      transformHold = transformVar + "(" + (Math.max(Math.min(Math.round(minSize - ((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((minSize - maxSize) / 70)), minSize), maxSize) / decrementer) + unitVar + ")";
    } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
      transformHold = transformVar + "(" + (minSize / decrementer) + unitVar + ")"
    } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
      frameContent.style.transform = transformVar + "(" + (maxSize / decrementer) + unitVar + ")"
    }
  }

  if (transform1 != undefined) {
    if (direction1 == "forwards" || direction1 == undefined) {
      if (isScrolledIntoView(container, section)) {
        transformHold1 = transformVar1 + "(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((maxSize1 - minSize1) / 70 + .16)), maxSize1), minSize1) / decrementer1) + unitVar1 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold1 = transformVar1 + "(" + (minSize1 / decrementer1) + unitVar1 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold1 = transformVar1 + "(" + (maxSize1 / decrementer1) + unitVar1 + ")"
      }
    } else if (direction1 == "backwards") {
      if (isScrolledIntoView(container, section)) {
        transformHold1 = transformVar1 + "(" + (Math.max(Math.min(Math.round(minSize1 - ((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((minSize1 - maxSize1) / 70 + .16)), minSize1), maxSize1) / decrementer1) + unitVar1 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold1 = transformVar1 + "(" + (minSize1 / decrementer1) + unitVar1 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold1 = transformVar1 + "(" + (maxSize1 / decrementer1) + unitVar1 + ")"
      }
    }
  }

  if (transform2 != undefined) {
    if (direction2 == "forwards" || direction2 == undefined) {
      if (isScrolledIntoView(container, section)) {
        transformHold2 = transformVar2 + "(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((maxSize2 - minSize2) / 70 + .16)), maxSize2), minSize2) / decrementer2) + unitVar2 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold2 = transformVar2 + "(" + (minSize2 / decrementer2) + unitVar2 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold2 = transformVar2 + "(" + (maxSize2 / decrementer2) + unitVar2 + ")"
      }
    } else if (direction2 == "backwards") {
      if (isScrolledIntoView(container, section)) {
        transformHold2 = transformVar2 + "(" + (Math.max(Math.min(Math.round(minSize2 - ((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((minSize2 - maxSize2) / 70 + .16)), minSize2), maxSize2) / decrementer2) + unitVar2 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold2 = transformVar2 + "(" + (minSize2 / decrementer2) + unitVar2 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold2 = transformVar2 + "(" + (maxSize2 / decrementer2) + unitVar2 + ")"
      }
    }
  }

  if (transform3 != undefined) {
    if (direction3 == "forwards" || direction3 == undefined) {
      if (isScrolledIntoView(container, section)) {
        transformHold3 = transformVar3 + "(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((maxSize3 - minSize3) / 70 + .16)), maxSize3), minSize3) / decrementer3) + unitVar3 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold3 = transformVar3 + "(" + (minSize3 / decrementer3) + unitVar3 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold3 = transformVar3 + "(" + (maxSize3 / decrementer3) + unitVar3 + ")"
      }
    } else if (direction3 == "backwards") {
      if (isScrolledIntoView(container, section)) {
        transformHold3 = transformVar3 + "(" + (Math.max(Math.min(Math.round(minSize3 - ((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((minSize3 - maxSize3) / 70 + .16)), minSize3), maxSize3) / decrementer3) + unitVar3 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold3 = transformVar3 + "(" + (minSize3 / decrementer3) + unitVar3 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold3 = transformVar3 + "(" + (maxSize3 / decrementer3) + unitVar3 + ")"
      }
    }
  }

  if (transform4 != undefined) {
    if (direction4 == "forwards" || direction4 == undefined) {
      if (isScrolledIntoView(container, section)) {
        transformHold4 = transformVar4 + "(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((maxSize4 - minSize4) / 70 + .16)), maxSize4), minSize4) / decrementer4) + unitVar4 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold4 = transformVar4 + "(" + (minSize4 / decrementer4) + unitVar4 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold4 = transformVar4 + "(" + (maxSize4 / decrementer4) + unitVar4 + ")"
      }
    } else if (direction4 == "backwards") {
      if (isScrolledIntoView(container, section)) {
        transformHold4 = transformVar4 + "(" + (Math.max(Math.min(Math.round(minSize4 - ((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((minSize4 - maxSize4) / 70 + .16)), minSize4), maxSize4) / decrementer4) + unitVar4 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold4 = transformVar4 + "(" + (minSize4 / decrementer4) + unitVar4 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold4 = transformVar4 + "(" + (maxSize4 / decrementer4) + unitVar4 + ")"
      }
    }
  }

  if (transform5 != undefined) {
    if (direction5 == "forwards" || direction5 == undefined) {
      if (isScrolledIntoView(container, section)) {
        transformHold5 = transformVar5 + "(" + (Math.max(Math.min(Math.round(((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((maxSize5 - minSize5) / 70 + .16)), maxSize5), minSize5) / decrementer5) + unitVar5 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold5 = transformVar5 + "(" + (minSize5 / decrementer5) + unitVar5 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold5 = transformVar5 + "(" + (maxSize5 / decrementer5) + unitVar5 + ")"
      }
    } else if (direction5 == "backwards") {
      if (isScrolledIntoView(container, section)) {
        transformHold5 = transformVar5 + "(" + (Math.max(Math.min(Math.round(minSize5 - ((document.documentElement.scrollTop - (elemTop + window.pageYOffset)) * 1) / rect.height * 100 * ((minSize5 - maxSize5) / 70 + .16)), minSize5), maxSize5) / decrementer5) + unitVar5 + ")";
      } else if (!isScrolledIntoView(container, section) && elemTop >= 0) {
        transformHold5 = transformVar5 + "(" + (minSize5 / decrementer5) + unitVar5 + ")"
      } else if (!isScrolledIntoView(container, section) && elemTop <= 0) {
        transformHold5 = transformVar5 + "(" + (maxSize5 / decrementer5) + unitVar5 + ")"
      }
    }
  }

  console.log(transformHold + " " + transformHold1 + " " + transformHold2 + " " + transformHold3 + " " + transformHold4 + " " + transformHold5)
  frameContent.style.transform = transformHold + " " + transformHold1 + " " + transformHold2 + " " + transformHold3 + " " + transformHold4 + " " + transformHold5;
}