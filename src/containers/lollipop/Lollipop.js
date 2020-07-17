/* eslint-disable no-undef */
import React, { Component } from "react";
import "./Lollipop.css";
import * as d3 from "d3";

class LollipopChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const cobweb = [
      {
        intensity: 1189,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551235,
        mz: 116.07
      },
      {
        intensity: 1014,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551236,
        mz: 263.14
      },
      {
        intensity: 1248,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551237,
        mz: 227.101
      },
      {
        intensity: 5315,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551238,
        mz: 358.143
      },
      {
        intensity: 5260,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551239,
        mz: 147.111
      },
      {
        intensity: 7613,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551240,
        mz: 245.128
      },
      {
        intensity: 6916,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551241,
        mz: 391.234
      },
      {
        intensity: 11298,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551242,
        mz: 748.371
      },
      {
        intensity: 11055,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551243,
        mz: 233.095
      },
      {
        intensity: 16995,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551244,
        mz: 261.09
      },
      {
        intensity: 12261,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551245,
        mz: 226.154
      },
      {
        intensity: 2332,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551246,
        mz: 335.143
      },
      {
        intensity: 2165,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551247,
        mz: 243.079
      },
      {
        intensity: 3416,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551248,
        mz: 619.327
      },
      {
        intensity: 2568,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551249,
        mz: 376.169
      },
      {
        intensity: 4752,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551250,
        mz: 340.132
      },
      {
        intensity: 3952,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551251,
        mz: 185.091
      },
      {
        intensity: 5248,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551252,
        mz: 730.361
      },
      {
        intensity: 4950,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551253,
        mz: 129.101
      },
      {
        intensity: 19218,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551254,
        mz: 488.287
      },
      {
        intensity: 19843,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551255,
        mz: 217.133
      },
      {
        intensity: 66639,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551256,
        mz: 244.165
      },
      {
        intensity: 497,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551257,
        mz: 471.223
      },
      {
        intensity: 436,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551258,
        mz: 229.101
      },
      {
        intensity: 420,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551259,
        mz: 312.14
      },
      {
        intensity: 407,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551260,
        mz: 360.194
      },
      {
        intensity: 763,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551261,
        mz: 373.223
      },
      {
        intensity: 724,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551262,
        mz: 682.356
      },
      {
        intensity: 675,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551263,
        mz: 101.106
      },
      {
        intensity: 609,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551264,
        mz: 342.18
      },
      {
        intensity: 344,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551265,
        mz: 115.085
      },
      {
        intensity: 319,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551266,
        mz: 245.168
      },
      {
        intensity: 316,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551267,
        mz: 292.13
      },
      {
        intensity: 402,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551268,
        mz: 601.314
      },
      {
        intensity: 366,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551269,
        mz: 244.14
      },
      {
        intensity: 361,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551270,
        mz: 487.201
      },
      {
        intensity: 346,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551271,
        mz: 218.137
      },
      {
        intensity: 1451,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551272,
        mz: 684.363
      },
      {
        intensity: 1540,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551273,
        mz: 505.211
      },
      {
        intensity: 1273,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551274,
        mz: 130.084
      },
      {
        intensity: 1338,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551275,
        mz: 477.216
      },
      {
        intensity: 1999,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551276,
        mz: 374.171
      },
      {
        intensity: 2086,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551277,
        mz: 167.08
      },
      {
        intensity: 1636,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551278,
        mz: 209.128
      },
      {
        intensity: 1990,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551279,
        mz: 363.137
      },
      {
        intensity: 898,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551280,
        mz: 257.096
      },
      {
        intensity: 938,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551281,
        mz: 459.207
      },
      {
        intensity: 763,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551282,
        mz: 120.08
      },
      {
        intensity: 770,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551283,
        mz: 215.083
      },
      {
        intensity: 1200,
        ms1_peak_id: 982186,
        ms2_ion_id: 45551284,
        mz: 227.138
      }
    ];
    const inten = cobweb.map(a => a.intensity);
    const mass = cobweb.map(a => a.mz);

    // target the single div in the HTML document
    const container = d3.select(".container");

    // HTML ELEMENTS
    // include introductory elements in a wrapping container
    const containerHTML = container
      .append("div")
      .attr("class", "container__html");

    // include also a tooltip, but in the main container
    const tooltip = container
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", "0");

    // DATA
    // include an array with 12 random values

    // sort the array items from biggest to smallest
    // (they'd be automatically sorted for a pie layout, but for a lollipop plot, it is advisable to sort them ahead of time)

    // SVG FRAME
    /* for the SVG element(s), define the margin and width/height values as per the habitual conventione
- create an svg element 
- nest in the element a g group element, translated inside of the parent element by a measure equal to the margin
- include the visualization in this last element, without fear of cropping 
*/
    const margin = {
      top: 170,
      right: 100,
      bottom: 70,
      // include additional margin to display the cardinal numbers in the ticks' labels
      left: 130
    };

    // include the each visualization in a squared frame
    const width = 1000 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

    // LOLLIPOP PLOT
    // include the svg and g elements following the mentioned convention
    const svgLollipopPlot = container
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height +
          margin.top +
          margin.bottom}`
      )
      .attr("class", "container__svg")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // SCALES
    // include scales based on the data
    // the axes are then plotted on the basis of these scales, but **after** the elements making up the visualization, to have the axes on top of the path elements

    // horizontally, the lollipop plot displays lines spanning the width according to the data points values, and the xScale therefore accounts for such values in the domain
    const xScale = d3
      .scaleLinear()
      .domain([0, 66639])
      .range([0, width]);

    // vertically, the lollipop plot divides the space in equal bands for each data points, and specifies therefore an ordinal scale
    const yScale = d3
      .scaleBand()
      // ordinal scale accepts in the domain an array, which is automatically generated by d3.range()
      // d3.range(3) --> [0, 1, 2]
      .domain(d3.range(cobweb.length))
      .range([0, height]);

    // PATHS AND CIRCLES
    // include a group element for each data point
    // inside of these wrapping elements, path and circle elements will be included immediately afterwards
    // this allows to include mouse events on both path and circle elements more concisely
    const lollipop = svgLollipopPlot
      .selectAll("g.lollipop")
      .data(inten)
      .enter()
      .append("g")
      .attr("class", "lollipop")
      // on mouseenter display the tooltip including text pertaining to the data point
      .on("mouseenter", d => {
        tooltip
          .style("opacity", "1")
          .style("top", `${d3.event.layerY}px`)
          .style("left", `${d3.event.layerX}px`)
          .text(`${d}`);
      })
      // on mouseleave, hide the tooltip back
      .on("mouseleave", () => tooltip.style("opacity", "0"));

    // on each wrapping g element included for each data point include a path and a circle element
    // please note: it is possible to also use a line element, which may be actually simpler
    lollipop
      .append("path")
      // with path syntax: start the path where the tick lies (based on the scale and offsetting for the band's own width)
      // move the path horizontally according to the data point values (weighed by the respective scale)
      // transition the path to this value from M 0 0
      .attr("d", (d, i) => `M 0 ${yScale(i) + yScale.bandwidth() / 2} h 0`)
      .transition()
      .duration(1000)
      // transition each element one after the other
      .delay((d, i) => 100 + 150 * i)
      .attr(
        "d",
        (d, i) => `M 0 ${yScale(i) + yScale.bandwidth() / 2} h ${xScale(d)}`
      );

    lollipop
      .append("circle")
      .attr("r", 5)
      // position the circles right where the path elements end
      .attr("cy", (d, i) => yScale(i) + yScale.bandwidth() / 2)
      // transition them horizontally and jointly with the path elements
      .attr("cx", d => 0)
      .transition()
      .duration(1000)
      .delay((d, i) => 100 + 150 * i)
      .attr("cx", d => xScale(d));

    // AXES
    // include axes based on the scales, **after** the g, path, circle elements to have the axes lie on top
    const xAxis = d3
      .axisBottom(xScale)
      // inclulde a thousand mark for all ticks expect for 0
      .tickFormat((d, i) => (i !== 0 ? `${d}` : d));

    const yAxis = d3
      .axisLeft(yScale)
      // remove ticks and include a number for each label (starting at 1 instead of 0)
      .tickSize(0)
      .tickPadding(10)
      // include a cardinal number detailing specific use cases for 1st, 2nd and 3rd
      .tickFormat(d => mass[d]);

    svgLollipopPlot
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    svgLollipopPlot
      .append("g")
      .attr("class", "axis")
      .call(yAxis);
    svgLollipopPlot
      .append("g")
      .attr("class", "axis")
      .call(yAxis);
    svgLollipopPlot
      .append("text")
      .attr("class", "ylabel")
      .attr("text-anchor", "end")
      .attr("y", -110)
      .attr("x", -40)
      .attr("dy", ".8em")
      .attr("transform", "rotate(-90)")
      .text("MZ");
    svgLollipopPlot
      .append("text")
      .attr("class", "xlabel")
      .attr("text-anchor", "end")
      .attr("x", 400)
      .attr("y", height + 50)
      .text("Intensity");
  }

  render() {
    return <div className="container" />;
  }
}

export default LollipopChart;
