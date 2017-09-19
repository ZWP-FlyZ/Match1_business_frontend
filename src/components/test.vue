<style >
  @import "../assets/bpmn/diagram-js.css";
  @import "../assets/bpmn/bpmn-embedded.css";
</style>
<template>
 <div>
  <div id="canvas" ></div>

  <button id="save-button">Save Diagram</button>
</div>
</template>
<script>
  import BpmnViewer from 'bpmn-js'
  import BpmnModeler from 'bpmn-moddle'
  
  export default {
  	data(){
  		return{

  		}
  	},
  	mounted:function(){
  		require('../assets/bpmn/bpmn-modeler.js')
  		require( '../assets/bpmn/modeler.js')
  	}
  }

</script>
<style scoped>
	html, body, #canvas {
      height: 900px;
      padding: 0;
      position:relative;
    }

    #save-button {
      position: absolute;
      top: 20px;
      right: 20px;

      border: solid 5px green;
    }
</style>
