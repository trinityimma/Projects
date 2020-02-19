Blockly.Python['links_a'] = function(block) {
  var value_anchor = Blockly.Python.valueToCode(block, 'anchor', Blockly.Python);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '&lt;a href ="'+value_anchor+'"&gt;\n'

                +statements_name+ 

                '&lt;/a&gt;\n';
  return code;
};

Blockly.Python['links_link'] = function(block) {
  var value_link = Blockly.Python.valueToCode(block, 'link', Blockly.Python);
  var value_rel = Blockly.Python.valueToCode(block, 'rel', Blockly.Python);
  var value_type = Blockly.Python.valueToCode(block, 'type', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;link rel =" '+value_link+' " type =" '+value_rel+' " href =" '+value_type+' "&gt;\n';
  return code;
};

Blockly.Python['links_nav'] = function(block) {
  var statements_navigation = Blockly.Python.statementToCode(block, 'navigation');
  // TODO: Assemble Python into code variable.
  var code = '&lt; nav&gt;\n'

  					+statements_navigation+
  					'&lt;/nav&gt;\n';
  return code;
};
Blockly.Blocks['links_links'] = {
  init: function() {
    this.appendValueInput("link")
        .setCheck(null)
        .appendField("link rel");
    this.appendDummyInput();
    this.appendValueInput("type")
        .setCheck(null)
        .appendField("href");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['links_anchor'] = function(block) {
  var value_link = Blockly.Python.valueToCode(block, 'link', Blockly.Python);
  var value_rel = Blockly.Python.valueToCode(block, 'rel', Blockly.Python);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '&lt;a href = "'+value_link+'"   class = "'+value_rel+'"&gt;\n'
          +statements_name+ '\n'+
              '&lt;/a&gt;\n';
  return code;
};
 Blockly.Python['links_links'] = function(block) {
  var value_link = Blockly.Python.valueToCode(block, 'link', Blockly.Python);
  var value_type = Blockly.Python.valueToCode(block, 'type', Blockly.Python);
  // TODO: Assemble Python into code variable.
  var code = '&lt;link rel =" '+value_link+' "   href =" '+value_type+' "&gt;\n';
  return code;
};
