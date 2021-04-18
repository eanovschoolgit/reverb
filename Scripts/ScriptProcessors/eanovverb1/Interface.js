Content.makeFrontInterface(800, 400);

const var WET = Content.getComponent("WET");
const var reverb1 = Synth.getEffect("reverb1");
const var Delay1 = Synth.getEffect("Delay1");

const var DRY = Content.getComponent("DRY");
const var GAIN2 = Synth.getEffect("GAIN2");

const var GAIN3 = Synth.getEffect("GAIN3");
const var GAIN4 = Synth.getEffect("GAIN4");
const var DELAYVERB = Content.getComponent("DELAYVERB");
const var DELAYVERBfeedback = Content.getComponent("DELAYVERBfeedback");


const var PRESET = Content.getComponent("PRESET");

const var Panel1 = Content.getComponent("Panel1");




inline function onPRESETControl(component, value)
{
	Panel1.showControl(value);
};

Content.getComponent("PRESET").setControlCallback(onPRESETControl);






inline function onDRYControl(component, value)
{
	
	GAIN2.setAttribute(GAIN2.Gain, value);
	GAIN3.setAttribute(GAIN3.Gain, value);

};

Content.getComponent("DRY").setControlCallback(onDRYControl);


inline function onDELAYVERBControl(component, value)
{
	Delay1.setAttribute(Delay1.DelayTimeRight, value);
	Delay1.setAttribute(Delay1.DelayTimeLeft, value);
};

Content.getComponent("DELAYVERB").setControlCallback(onDELAYVERBControl);





inline function onDELAYVERBfeedbackControl(component, value)
{
	Delay1.setAttribute(Delay1.FeedbackRight, value);
	Delay1.setAttribute(Delay1.FeedbackLeft, value);
};

Content.getComponent("DELAYVERBfeedback").setControlCallback(onDELAYVERBfeedbackControl);





// vu mter//


const var monoMeter = Content.getComponent("monoMeter");
const var SimpleGain2 = Synth.getEffect("SimpleGain2");

reg timer = Engine.createTimerObject();
reg newValue, value;

timer.setTimerCallback(function()
{
      newValue = SimpleGain2.getCurrentLevel(0) > SimpleGain2.getCurrentLevel(1) ? SimpleGain2.getCurrentLevel(0) : SimpleGain2.getCurrentLevel(1);
      value = (newValue > value) ? newValue : value * 0.95;
      monoMeter.setValue(value);
     

});
timer.startTimer(30);




const var SIZE = Content.getComponent("SIZE");






inline function onSIZEControl(component, value)
{
	reverb1.setAttribute(reverb1.RoomSize, value);

};

Content.getComponent("SIZE").setControlCallback(onSIZEControl);


function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 