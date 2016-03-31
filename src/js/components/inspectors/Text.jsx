'use strict';
var React = require('react'),
    Property = require('./Property'),
    Base = require('../../model/primitives/marks/Text');

var Text = React.createClass({
  render: function() {
    var props = this.props,
        primitive = props.primitive,
        update = primitive.properties.update;

    return (
      <div>
        <h4 className="hed-tertiary">Text</h4>

        <Property name="text" label="Text"
          type="text"
          primitive={primitive}
          canDrop={true}
          scale={update.text.scale}
          field={update.text.field}
          signal={update.text.signal} />

        <h4 className="hed-tertiary">Font</h4>

        <Property name="font" label="Font"
          primitive={primitive}
          type="select"
          opts={Base.fonts}
          canDrop={true}
          scale={update.font.scale}
          field={update.font.field}
          signal={update.font.signal} />

        <Property name="fontSize" label="Size"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.fontSize.scale}
          field={update.fontSize.field}
          signal={update.fontSize.signal} />

        <Property name="fontWeight" label="Weight"
          primitive={primitive}
          type="select"
          opts={Base.fontWeights}
          canDrop={true}
          scale={update.fontWeight.scale}
          field={update.fontWeight.field}
          signal={update.fontWeight.signal} />

        <Property name="fontStyle" label="Style"
          primitive={primitive}
          type="select"
          opts={Base.fontStyles}
          canDrop={true}
          scale={update.fontStyle.scale}
          field={update.fontStyle.field}
          signal={update.fontStyle.signal} />

        <Property name="fill" label="Color"
          type="color"
          primitive={primitive}
          canDrop={true}
          scale={update.fill.scale}
          field={update.fill.field}
          signal={update.fill.signal} />

        <Property name="fillOpacity" label="Opacity"
          type="range"
          primitive={primitive}
          canDrop={true}
          min="0" max="1" step="0.05"
          scale={update.fillOpacity.scale}
          field={update.fillOpacity.field}
          signal={update.fillOpacity.signal} />

        <h4 className="hed-tertiary">Position</h4>

        <Property name="x" label="X"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.x.scale}
          field={update.x.field}
          signal={update.x.signal} />

        <Property name="y" label="Y"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.y.scale}
          field={update.y.field}
          signal={update.y.signal} />

        <h4 className="hed-tertiary">Offset</h4>

        <Property name="dx" label="X"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.dx.scale}
          field={update.dx.field}
          signal={update.dx.signal} />

        <Property name="dy" label="Y"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.dy.scale}
          field={update.dy.field}
          signal={update.dy.signal} />

        <h4 className="hed-tertiary">Align</h4>

        <Property name="align" label="Horizontal"
          primitive={primitive}
          type="select"
          opts={Base.alignments}
          canDrop={true}
          scale={update.align.scale}
          field={update.align.field}
          signal={update.align.signal} />

        <Property name="baseline" label="Vertical"
          primitive={primitive}
          type="select"
          opts={Base.baselines}
          canDrop={true}
          scale={update.baseline.scale}
          field={update.baseline.field}
          signal={update.baseline.signal} />

        <Property name="angle" label="Rotation"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.angle.scale}
          field={update.angle.field}
          signal={update.angle.signal} />
      </div>
    );
  }
});

module.exports = Text;