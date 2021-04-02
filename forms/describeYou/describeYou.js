rdoPersonality.onchange=function(){
  let userChoice = $("input[name=rdoPersonality]:checked").prop("value")
  if (rdoPersonality.value == 0)
    lblMessageDisplayed.value = `I would agree that you are an '${userChoice}' person too!`
  else if (rdoPersonality.value == 1)
    lblMessageDisplayed.value = `I would agree that you are an '${userChoice}' person too!`
  else if (rdoPersonality.value == 2)
    lblMessageDisplayed.value = `I would agree that you are an '${userChoice}' person too!`
  else if (rdoPersonality.value == 3)
    lblMessageDisplayed.value = `I would agree that you are an '${userChoice}' person too!`
  else 
    lblMessageDisplayed.value = `I don't understand!`
}

btnExerciseForm.onclick=function(){
  ChangeForm(favExercises)
}

