! function(e, R) { "object" == typeof exports && "object" == typeof module ? module.exports = R() : "function" == typeof define && define.amd ? define("dscc", [], R) : "object" == typeof exports ? exports.dscc = R() : e.dscc = R() }(window, function() {
    return C = {}, n.m = t = {
        "./src/index.ts":
        /*!**********************!*\
          !*** ./src/index.ts ***!
          \**********************/
        /*! no static exports found */
            function(e, N, R) {
            "use strict";
            var i = this && this.__assign || function() {
                return (i = Object.assign || function(e) {
                    for (var R, t = 1, C = arguments.length; t < C; t++)
                        for (var n in R = arguments[t]) Object.prototype.hasOwnProperty.call(R, n) && (e[n] = R[n]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(N, "__esModule", { value: !0 });
            /*!
              @license
              Copyright 2019 Google LLC

              Licensed under the Apache License, Version 2.0 (the "License");
              you may not use this file except in compliance with the License.
              You may obtain a copy of the License at

              https://www.apache.org/licenses/LICENSE-2.0

              Unless required by applicable law or agreed to in writing, software
              distributed under the License is distributed on an "AS IS" BASIS,
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              See the License for the specific language governing permissions and
              limitations under the License.
            */
            var a = R( /*! ./types */ "./src/types.ts");
            ! function(e) { for (var R in e) N.hasOwnProperty(R) || (N[R] = e[R]) }(R( /*! ./types */ "./src/types.ts")), N.getWidth = function() { return document.body.clientWidth }, N.getHeight = function() { return document.documentElement.clientHeight }, N.getComponentId = function() { var e = new URLSearchParams(window.location.search).get("dscId"); if (null !== e) return e; throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new") };

            function E(e) { return e === a.ConfigDataElementType.DIMENSION ? -1 : 1 }

            function r(e) { return e.type === a.ConfigDataElementType.DIMENSION || e.type === a.ConfigDataElementType.METRIC }

            function _(e) {
                var R = [];
                e.config.data.forEach(function(e) { e.elements.filter(r).forEach(function(e) { R.push(e) }) });
                var t, C = (t = function(e, R) { return E(e.type) - E(R.type) }, R.map(function(e, R) { return { item: e, index: R } }).sort(function(e, R) { return t(e.item, R.item) || e.index - R.index }).map(function(e) { return e.item })),
                    n = [];
                return C.forEach(function(e) { e.value.forEach(function() { return n.push(e.id) }) }), n
            }

            function o(R) {
                return function(e) {
                    var t, C, n = {};
                    return C = R, ((t = e).length < C.length ? t.map(function(e, R) { return [e, C[R]] }) : C.map(function(e, R) { return [t[R], e] })).forEach(function(e) {
                        var R = e[0],
                            t = e[1];
                        void 0 === n[t] && (n[t] = []), n[t].push(R)
                    }, {}), n
                }
            }
            N.fieldsByConfigId = function(e) {
                var R = e.fields.reduce(function(e, R) { return e[R.id] = R, e }, {}),
                    t = {};
                return e.config.data.forEach(function(e) { e.elements.filter(r).forEach(function(e) { t[e.id] = e.value.map(function(e) { return R[e] }) }) }), t
            };

            function U(e) {
                var R = {};
                return (e.config.style || []).forEach(function(e) {
                    e.elements.forEach(function(e) {
                        if (void 0 !== R[e.id]) throw new Error("styleIds must be unique. Your styleId: '" + e.id + "' is used more than once.");
                        R[e.id] = { value: e.value, defaultValue: e.defaultValue }
                    })
                }, {}), R
            }

            function Y(e) { return e.config.themeStyle }

            function n(e) {
                switch (e) {
                    case a.DSInteractionType.FILTER:
                        return a.InteractionType.FILTER
                }
            }

            function s(e) {
                var R = e.config.interactions;
                return void 0 === R ? {} : R.reduce(function(e, R) {
                    var t = R.supportedActions.map(n),
                        C = { type: n(R.value.type), data: R.value.data };
                    return e[R.id] = { value: C, supportedActions: t }, e
                }, {})
            }

            function u(e) { return (e.dataResponse.dateRanges || []).reduce(function(e, R) { return e[R.id] = { start: R.start, end: R.end }, e }, {}) }

            function T(e) { var R = e.config.colorMap || {}; return i({}, R) }
            N.tableTransform = function(e) {
                return {
                    tables: (R = e, C = N.fieldsByConfigId(R), n = _(R), E = {}, r = n.map(function(e) {
                        void 0 === E[e] ? E[e] = 0 : E[e]++;
                        var R = E[e],
                            t = C[e][R];
                        return i(i({}, t), { configId: e })
                    }), (t = {})[a.TableType.DEFAULT] = { headers: [], rows: [] }, o = t, R.dataResponse.tables.forEach(function(e) { o[e.id] = { headers: r, rows: e.rows } }), o),
                    dateRanges: u(e),
                    fields: N.fieldsByConfigId(e),
                    style: U(e),
                    theme: Y(e),
                    interactions: s(e),
                    colorMap: T(e)
                };
                var R, t, C, n, E, r, o
            }, N.objectTransform = function(e) {
                return {
                    tables: (C = _(R = e), (t = {})[a.TableType.DEFAULT] = [], n = t, R.dataResponse.tables.forEach(function(e) {
                        var R = e.rows.map(o(C));
                        if (e.id === a.TableType.DEFAULT) n[e.id] = R;
                        else {
                            var t = n[e.id];
                            n[e.id] = void 0 === t ? R : t.concat(R)
                        }
                    }), n),
                    dateRanges: u(e),
                    fields: N.fieldsByConfigId(e),
                    style: U(e),
                    theme: Y(e),
                    interactions: s(e),
                    colorMap: T(e)
                };
                var R, t, C, n
            };

            function c(e) { var R, t = !1; return e === N.tableTransform || e === N.objectTransform ? t = !0 : (R = !1, "identity" === e("identity") && (R = !0, console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")), R && (t = !0)), t }
            N.subscribeToData = function(R, t) {
                if (c(t.transform)) {
                    var e = function(e) { e.data.type === a.MessageType.RENDER ? R(t.transform(e.data)) : console.error("MessageType: " + e.data.type + " is not supported by this version of the library.") };
                    window.addEventListener("message", e);
                    var C = { componentId: N.getComponentId(), type: a.ToDSMessageType.VIZ_READY };
                    return window.parent.postMessage(C, "*"),
                        function() { return window.removeEventListener("message", e) }
                }
                throw new Error("Only the built in transform functions are supported.")
            }, N.sendInteraction = function(e, R, t) {
                var C = N.getComponentId(),
                    n = { type: a.ToDSMessageType.INTERACTION, id: e, data: t, componentId: C };
                window.parent.postMessage(n, "*")
            }, N.clearInteraction = function(e, R) { N.sendInteraction(e, R, void 0) }
        },
        "./src/types.ts":
        /*!**********************!*\
          !*** ./src/types.ts ***!
          \**********************/
        /*! no static exports found */
            function(e, R, t) {
            "use strict";
            var C, n, E, r, o, N, i;
            Object.defineProperty(R, "__esModule", { value: !0 }), (C = R.ConceptType || (R.ConceptType = {})).METRIC = "METRIC", C.DIMENSION = "DIMENSION", (R.MessageType || (R.MessageType = {})).RENDER = "RENDER", (n = R.FieldType || (R.FieldType = {})).YEAR = "YEAR", n.YEAR_QUARTER = "YEAR_QUARTER", n.YEAR_MONTH = "YEAR_MONTH", n.YEAR_WEEK = "YEAR_WEEK", n.YEAR_MONTH_DAY = "YEAR_MONTH_DAY", n.YEAR_MONTH_DAY_HOUR = "YEAR_MONTH_DAY_HOUR", n.QUARTER = "QUARTER", n.MONTH = "MONTH", n.WEEK = "WEEK", n.MONTH_DAY = "MONTH_DAY", n.DAY_OF_WEEK = "DAY_OF_WEEK", n.DAY = "DAY", n.HOUR = "HOUR", n.MINUTE = "MINUTE", n.DURATION = "DURATION", n.COUNTRY = "COUNTRY", n.COUNTRY_CODE = "COUNTRY_CODE", n.CONTINENT = "CONTINENT", n.CONTINENT_CODE = "CONTINENT_CODE", n.SUB_CONTINENT = "SUB_CONTINENT", n.SUB_CONTINENT_CODE = "SUB_CONTINENT_CODE", n.REGION = "REGION", n.REGION_CODE = "REGION_CODE", n.CITY = "CITY", n.CITY_CODE = "CITY_CODE", n.METRO_CODE = "METRO_CODE", n.LATITUDE_LONGITUDE = "LATITUDE_LONGITUDE", n.NUMBER = "NUMBER", n.PERCENT = "PERCENT", n.TEXT = "TEXT", n.BOOLEAN = "BOOLEAN", n.URL = "URL", n.IMAGE = "IMAGE", n.CURRENCY_AED = "CURRENCY_AED", n.CURRENCY_ALL = "CURRENCY_ALL", n.CURRENCY_ARS = "CURRENCY_ARS", n.CURRENCY_AUD = "CURRENCY_AUD", n.CURRENCY_BDT = "CURRENCY_BDT", n.CURRENCY_BGN = "CURRENCY_BGN", n.CURRENCY_BOB = "CURRENCY_BOB", n.CURRENCY_BRL = "CURRENCY_BRL", n.CURRENCY_CAD = "CURRENCY_CAD", n.CURRENCY_CDF = "CURRENCY_CDF", n.CURRENCY_CHF = "CURRENCY_CHF", n.CURRENCY_CLP = "CURRENCY_CLP", n.CURRENCY_CNY = "CURRENCY_CNY", n.CURRENCY_COP = "CURRENCY_COP", n.CURRENCY_CRC = "CURRENCY_CRC", n.CURRENCY_CZK = "CURRENCY_CZK", n.CURRENCY_DKK = "CURRENCY_DKK", n.CURRENCY_DOP = "CURRENCY_DOP", n.CURRENCY_EGP = "CURRENCY_EGP", n.CURRENCY_ETB = "CURRENCY_ETB", n.CURRENCY_EUR = "CURRENCY_EUR", n.CURRENCY_GBP = "CURRENCY_GBP", n.CURRENCY_HKD = "CURRENCY_HKD", n.CURRENCY_HRK = "CURRENCY_HRK", n.CURRENCY_HUF = "CURRENCY_HUF", n.CURRENCY_IDR = "CURRENCY_IDR", n.CURRENCY_ILS = "CURRENCY_ILS", n.CURRENCY_INR = "CURRENCY_INR", n.CURRENCY_IRR = "CURRENCY_IRR", n.CURRENCY_ISK = "CURRENCY_ISK", n.CURRENCY_JMD = "CURRENCY_JMD", n.CURRENCY_JPY = "CURRENCY_JPY", n.CURRENCY_KRW = "CURRENCY_KRW", n.CURRENCY_LKR = "CURRENCY_LKR", n.CURRENCY_LTL = "CURRENCY_LTL", n.CURRENCY_MNT = "CURRENCY_MNT", n.CURRENCY_MVR = "CURRENCY_MVR", n.CURRENCY_MXN = "CURRENCY_MXN", n.CURRENCY_MYR = "CURRENCY_MYR", n.CURRENCY_NOK = "CURRENCY_NOK", n.CURRENCY_NZD = "CURRENCY_NZD", n.CURRENCY_PAB = "CURRENCY_PAB", n.CURRENCY_PEN = "CURRENCY_PEN", n.CURRENCY_PHP = "CURRENCY_PHP", n.CURRENCY_PKR = "CURRENCY_PKR", n.CURRENCY_PLN = "CURRENCY_PLN", n.CURRENCY_RON = "CURRENCY_RON", n.CURRENCY_RSD = "CURRENCY_RSD", n.CURRENCY_RUB = "CURRENCY_RUB", n.CURRENCY_SAR = "CURRENCY_SAR", n.CURRENCY_SEK = "CURRENCY_SEK", n.CURRENCY_SGD = "CURRENCY_SGD", n.CURRENCY_THB = "CURRENCY_THB", n.CURRENCY_TRY = "CURRENCY_TRY", n.CURRENCY_TWD = "CURRENCY_TWD", n.CURRENCY_TZS = "CURRENCY_TZS", n.CURRENCY_UAH = "CURRENCY_UAH", n.CURRENCY_USD = "CURRENCY_USD", n.CURRENCY_UYU = "CURRENCY_UYU", n.CURRENCY_VEF = "CURRENCY_VEF", n.CURRENCY_VND = "CURRENCY_VND", n.CURRENCY_YER = "CURRENCY_YER", n.CURRENCY_ZAR = "CURRENCY_ZAR", (E = R.TableType || (R.TableType = {})).DEFAULT = "DEFAULT", E.COMPARISON = "COMPARISON", E.SUMMARY = "SUMMARY", (r = R.DateRangeType || (R.DateRangeType = {})).DEFAULT = "DEFAULT", r.COMPARISON = "COMPARISON", (o = R.ConfigDataElementType || (R.ConfigDataElementType = {})).METRIC = "METRIC", o.DIMENSION = "DIMENSION", o.MAX_RESULTS = "MAX_RESULTS", (N = R.ConfigStyleElementType || (R.ConfigStyleElementType = {})).TEXTINPUT = "TEXTINPUT", N.SELECT_SINGLE = "SELECT_SINGLE", N.CHECKBOX = "CHECKBOX", N.FONT_COLOR = "FONT_COLOR", N.FONT_SIZE = "FONT_SIZE", N.FONT_FAMILY = "FONT_FAMILY", N.FILL_COLOR = "FILL_COLOR", N.BORDER_COLOR = "BORDER_COLOR", N.AXIS_COLOR = "AXIS_COLOR", N.GRID_COLOR = "GRID_COLOR", N.OPACITY = "OPACITY", N.LINE_WEIGHT = "LINE_WEIGHT", N.LINE_STYLE = "LINE_STYLE", N.BORDER_RADIUS = "BORDER_RADIUS", N.INTERVAL = "INTERVAL", N.SELECT_RADIO = "SELECT_RADIO", (R.DSInteractionType || (R.DSInteractionType = {})).FILTER = "FILTER", (i = R.ToDSMessageType || (R.ToDSMessageType = {})).VIZ_READY = "vizReady", i.INTERACTION = "vizAction", (R.InteractionType || (R.InteractionType = {})).FILTER = "FILTER"
        }
    }, n.c = C, n.d = function(e, R, t) { n.o(e, R) || Object.defineProperty(e, R, { enumerable: !0, get: t }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(R, e) {
        if (1 & e && (R = n(R)), 8 & e) return R;
        if (4 & e && "object" == typeof R && R && R.__esModule) return R;
        var t = Object.create(null);
        if (n.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: R }), 2 & e && "string" != typeof R)
            for (var C in R) n.d(t, C, function(e) { return R[e] }.bind(null, C));
        return t
    }, n.n = function(e) { var R = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(R, "a", R), R }, n.o = function(e, R) { return Object.prototype.hasOwnProperty.call(e, R) }, n.p = "", n(n.s = "./src/index.ts");

    function n(e) { if (C[e]) return C[e].exports; var R = C[e] = { i: e, l: !1, exports: {} }; return t[e].call(R.exports, R, R.exports, n), R.l = !0, R.exports }
    var t, C
});
// above is dscc.min.js (not 0.3.13)

function drawViz(data) {
    // helper functions
    var width = dscc.getWidth();
    var height = dscc.getHeight();

    // compact numbers
    function formatAsCompact(x) {
        const formatter = Intl.NumberFormat("en", { notation: "compact" });
        return formatter.format(x);
    }

    // thousand separators
    function numberWithCommas(x, dp) {
        return parseFloat(x).toFixed(dp).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    // format as a percentage
    function formatAsPercent(x, dp) {
        return (x * 100).toFixed(dp).toString() + "%";
    };

    // process a number based on settings
    function allFormatting(x, dp, percentFlag, compactFlag, prefix, missingValue) {
        if (isNaN(x) || x === null) {
            return missingValue;
        };

        if (percentFlag) {
            return formatAsPercent(x, dp).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if (compactFlag) {
            return prefix + formatAsCompact(x);
        } else {
            return prefix + numberWithCommas(x, dp);
        };
    };

    // Container setup.
    let container = document.getElementById('container');
    if (container) {
        container.textContent = '';
    } else {
        container = document.createElement('div')
        container.id = 'container'
        document.body.appendChild(container);
    }

    // padding
    container.style.paddingLeft = data.style.leftPadding.value;
    container.style.paddingRight = data.style.rightPadding.value;
    container.style.paddingTop = data.style.topPadding.value;

    // Create title
    var titleElement = document.createElement('div');
    titleElement.id = 'kpiTitle';
    //var currentMetricName = data.fields['currentMetric'][0].name;
    //console.log(data.fields['currentMetric'][0].name);

    // optional title metric
    //console.log(data);
    //console.log(data.fields.titleMetric.length);
    if (data.fields.titleMetric === undefined || data.fields.titleMetric.length == 0) {
        //console.log('no optional title metric found');
        titleElement.innerText = data.fields['currentMetric'][0].name;
        var titleMetricAdjust = 0;
    } else {
        var titleMetric = data.tables.DEFAULT.rows[0].slice(-1);
        //console.log(data.tables.DEFAULT.rows[0].slice(-1));
        titleElement.innerText = titleMetric;
        var titleMetricAdjust = 1;
    };

    // set font for all text
    container.style.fontFamily = data.style.titleFont.value;

    // set colour of the title
    titleElement.style.color = data.style.titleColor.value['color'];

    // hyperlink changes parent from inside i frame
    container.innerHTML = '<base target="_parent">';

    // info icon at the top
    //container.appendChild(infoIcon);

    // add optional hyperlink
    if (data.style.hyperlink.value != "") {
        var hyperlink = document.createElement('a');
        hyperlink.setAttribute('href', data.style.hyperlink.value);
        hyperlink.setAttribute('target', '_blank')
        hyperlink.innerHTML = titleElement.outerHTML;

        //container.innerHTML = '<a href="' + data.style.hyperlink.value + '">';
        //container.insertAdjacentHTML('afterbegin', '<a href="' + data.style.hyperlink.value + '">');
        container.appendChild(hyperlink);
    } else {
        container.appendChild(titleElement);
    };

    // create the main KPI value
    const currentValueDiv = document.createElement('div');
    currentValueDiv.id = 'currentValue';

    //data.TEXT

    // div for the Current Metric Value - the big one
    var currentMetricValue = document.createElement('div');
    currentMetricValue.id = 'currentKpiValue';
    currentMetricValue.className = 'currentKpiValue';
    var currentMetric = data.tables.DEFAULT.rows[0][0];

    // missing value setting
    var missingValue = data.style.missingData.value;
    var dp = data.style.decimalPrecision.value;
    var varDp = data.style.decimalPrecisionVariance.value;
    var percentFlag = data.style.percentMetric.value;
    var compactFlag = data.style.compactNumbers.value;
    var prefix = data.style.prefix.value;

    currentMetricValue.innerText = allFormatting(currentMetric, dp, percentFlag, compactFlag, prefix, missingValue);

    // set colour
    currentMetricValue.style.color = data.style.currentMetricColor.value['color'];

    container.appendChild(currentMetricValue);

    // set the size of the current metric
    currentMetricValue.style.fontSize = data.style.currentMetricSize.value + "px";

    // make a data table
    var defaultTable = data.tables.DEFAULT;

    // function to create a comparison row
    function createComparisonRow(dataTable, i, isDateComparison, dateRangeString) {
        var comparisonMetricDiv = document.createElement('div');
        comparisonMetricDiv.id = 'comparisonMetric' + i + 'Div';

        var comparisonMetricNameSpan = document.createElement('span');
        comparisonMetricNameSpan.className = 'comparisonMetricName';

        var comparisonMetricSpan = document.createElement('span');
        comparisonMetricSpan.className = 'comparisonMetric';

        var comparisonMetric = dataTable.rows[0][i];

        if (isDateComparison) {
            var nameCompMetric = data.fields['currentMetric'][0].name;
        } else {
            //var nameCompMetric = data.fields['comparisonMetric'][i - 1].name;
            //console.log(data.tables.DEFAULT.headers)
            var nameCompMetric = data.tables.DEFAULT.headers[i].name;
        };

        var comparisonMetricName = nameCompMetric

        comparisonMetricSpan.innerText = allFormatting(comparisonMetric, dp, percentFlag, compactFlag, prefix, missingValue);

        comparisonMetricDiv.className = "comparisonMetricDiv ";

        var comparisonMetricSpanDiff = document.createElement('span');
        comparisonMetricSpanDiff.className = 'comparisonMetricDiff';

        var comparisonMetricAbsSpan = document.createElement('span');
        comparisonMetricAbsSpan.className = 'comparisonMetricAbsSpan';

        var comparisonMetricPercSpan = document.createElement('span');
        comparisonMetricPercSpan.className = 'comparisonMetricPercSpan';

        var comparisonOpenBracket = document.createElement('span');
        comparisonOpenBracket.innerText = " (";
        var comparisonCloseBracket = document.createElement('span');
        comparisonCloseBracket.innerText = ")";

        // show or hide metric names and value
        if (data.style.titleVisibility.value) {
            titleElement.style.display = "";
        } else {
            titleElement.style.display = "none";
        };

        if (data.style.currentMetricVisibility.value) {
            currentMetricValue.style.display = "";
        } else {
            currentMetricValue.style.display = "none";
        };

        if (data.style.comparisonMetricNameVisibility.value) {
            comparisonMetricNameSpan.style.display = "";
        } else {
            comparisonMetricNameSpan.style.display = "none";
        };

        if (data.style.comparisonMetricVisibility.value) {
            comparisonMetricSpan.style.display = "";
            comparisonOpenBracket.style.display = "";
            comparisonCloseBracket.style.display = "";
        } else {
            comparisonMetricSpan.style.display = "none";
            comparisonOpenBracket.style.display = "none";
            comparisonCloseBracket.style.display = "none";
        };

        var comparisonMetricDifference = currentMetric - comparisonMetric;
        var comparisonMetricVariance = comparisonMetricDifference / comparisonMetric;

        if ((comparisonMetricVariance * 100).toFixed(1) > 0) {
            var comparisonMetricSign = "+";
        } else {
            var comparisonMetricSign = "-";
        };

        comparisonMetricAbsSpan.innerText = comparisonMetricSign + allFormatting(comparisonMetricDifference,
            dp, percentFlag, compactFlag, prefix, missingValue).replace('-', '');
        comparisonMetricPercSpan.innerText = comparisonMetricSign + allFormatting(comparisonMetricVariance,
            varDp, true, compactFlag, prefix, missingValue).replace('-', ''); // replace because prefix was before - sign

        var separatorChar = document.createElement('span');
        separatorChar.innerText = " " + data.style.separator.value + " ";

        var nameValueSeparatorChar = document.createElement('span');
        nameValueSeparatorChar.innerText = " " + data.style.nameValueSeparator.value + " ";

        // set colour of the comparison text and set icon
        var increaseColor = data.style.increaseColor.value['color'];
        var middleColor = data.style.middleColor.value['color'];
        var decreaseColor = data.style.decreaseColor.value['color'];

        var iconSpan = document.createElement('span');

        if ((comparisonMetricVariance * 100).toFixed(1) > data.style.middleMax.value) {
            comparisonMetricDiv.style.color = increaseColor;
            iconSpan.innerText = data.style.iconIncrease.value + " ";
        } else if ((comparisonMetricVariance * 100).toFixed(1) < data.style.middleMin.value) {
            comparisonMetricDiv.style.color = decreaseColor;
            iconSpan.innerText = data.style.iconDecrease.value + " ";
        } else {
            comparisonMetricDiv.style.color = middleColor;
            iconSpan.innerText = data.style.iconMiddle.value + " ";
        };

        // extra one for textmode
        var iconSpanTM = document.createElement('span');
        iconSpanTM.innerText = iconSpan.innerText;

        // build the comparison row
        comparisonMetricSpanDiff.appendChild(comparisonOpenBracket);
        comparisonMetricSpanDiff.appendChild(comparisonMetricAbsSpan);
        comparisonMetricSpanDiff.appendChild(separatorChar);
        comparisonMetricSpanDiff.appendChild(comparisonMetricPercSpan);
        comparisonMetricSpanDiff.appendChild(comparisonCloseBracket);

        // change order if it's a date range comparison
        if (dateRangeString !== undefined) {
            comparisonMetricNameSpan.innerText = " " + dateRangeString
            comparisonMetricDiv.appendChild(iconSpan);
            comparisonMetricDiv.appendChild(comparisonMetricSpan);
            comparisonMetricDiv.appendChild(comparisonMetricSpanDiff);

            comparisonMetricDiv.appendChild(comparisonMetricNameSpan);
        } else {
            comparisonMetricNameSpan.innerText = comparisonMetricName;
            comparisonMetricDiv.appendChild(iconSpan);
            comparisonMetricDiv.appendChild(comparisonMetricNameSpan);
            comparisonMetricDiv.appendChild(nameValueSeparatorChar);
            comparisonMetricDiv.appendChild(comparisonMetricSpan);
            comparisonMetricDiv.appendChild(comparisonMetricSpanDiff);
        };

        // align title, metric and comparison
        titleElement.style.textAlign = data.style.titleAlign.value;
        currentMetricValue.style.textAlign = data.style.valueAlign.value;
        comparisonMetricDiv.style.textAlign = data.style.comparisonAlign.value;

        // control the visibility of the absolute and percentage variance
        if (data.style.varianceOptions.value == "both") {
            comparisonMetricAbsSpan.style.display = "";
            comparisonMetricPercSpan.style.display = "";
            separatorChar.style.display = "";
        } else
        if ((data.style.varianceOptions.value == "absoluteOnly")) {
            comparisonMetricAbsSpan.style.display = "";
            comparisonMetricPercSpan.style.display = "none";
            separatorChar.style.display = "none";
        } else if ((data.style.varianceOptions.value == "percentOnly")) {
            comparisonMetricAbsSpan.style.display = "none";
            comparisonMetricPercSpan.style.display = "";
            separatorChar.style.display = "none";
        } else if ((data.style.varianceOptions.value == "none")) {
            comparisonMetricSpanDiff.style.display = "none";
            separatorChar.style.display = "none";
            nameValueSeparatorChar.style.display = "none";
        };

        // control visibility of icons
        if (data.style.iconVisibility.value) {
            iconSpan.style.display = "";
        } else {
            iconSpan.style.display = "none";
        };

        // set the size of the title
        titleElement.style.fontSize = data.style.titleSize.value + "px";

        // set size and line height of comparison text
        comparisonMetricDiv.style.fontSize = data.style.comparisonMetricSize.value + "px";
        comparisonMetricDiv.style.lineHeight = data.style.comparisonMetricLineHeight.value + "px";

        // text mode
        // replace variables in the textMode string
        function replaceAll(str) {
            var mapObj = {
                "{absoluteDifference}": comparisonMetricAbsSpan.outerHTML,
                "{percentDifference}": comparisonMetricPercSpan.outerHTML,
                "{separator}": data.style.separator.value,
                "{nameValueSeparator}": data.style.nameValueSeparator.value,
                "{iconPrefix}": iconSpanTM.outerHTML,
                "{comparisonMetricName}": comparisonMetricName,
                "{comparisonMetric}": allFormatting(comparisonMetric, dp, percentFlag, compactFlag, prefix, missingValue),
                "{currentMetric}": allFormatting(currentMetric, dp, percentFlag, compactFlag, prefix, missingValue),
                "{currentMetricName}": data.fields['currentMetric'][0].name
            };

            var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

            return str.replace(re, function(matched) {
                return mapObj[matched];
            });
        };

        var textModeSpan = document.createElement('span');
        textModeSpan.className = 'textMode';
        textModeSpan.innerHTML = replaceAll(data.style.textMode.value);

        // toggle visibility of textmode
        if (data.style.textModeVisibility.value) {
            textModeSpan.style.display = "";
        } else {
            textModeSpan.style.display = "none";
        };

        container.appendChild(comparisonMetricDiv);
        container.appendChild(textModeSpan);
    };

    // information mode

    // information mouseover
    var infoParent = document.createElement('span');
    infoParent.className = 'help-tip';
    var informationSpan = document.createElement('span');
    // console.log(data.style.infoText.value);
    informationSpan.innerHTML = data.style.infoText.value;
    //console.log(width);
    //console.log(height);
    informationSpan.style.width = (width - 50) + 'px';
    informationSpan.style.height = (height - 50) + 'px';
    informationSpan.style.left = ((width - 60) * -1) + 'px';
    informationSpan.style.overflow = "auto";
    infoParent.innerHTML = informationSpan.outerHTML;

    container.appendChild(infoParent);

    // control visibility of information mode
    if (data.style.infoVisibility.value) {
        infoParent.style.display = "";
    } else {
        infoParent.style.display = "none";
    };


    // informationSpan.id = 'information';
    // 
    // informationSpan.style.display = "none";
    // container.appendChild(informationSpan);

    // date ranges
    if (!data.dateRanges) { //} !== undefined) {
        //var defaultDateRange = data.dateRanges.DEFAULT;
        var startdate = new Date(Date.UTC(data.dateRanges.DEFAULT.start.substring(0, 4), data.dateRanges.DEFAULT.start.substring(4, 6) - 1, data.dateRanges.DEFAULT.start.substring(6, 8))).toLocaleString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC"
            }),
            enddate = new Date(Date.UTC(data.dateRanges.DEFAULT.end.substring(0, 4), data.dateRanges.DEFAULT.end.substring(4, 6) - 1, data.dateRanges.DEFAULT.end.substring(6, 8))).toLocaleString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC"
            });
        var defaultDateString = "from " + startdate + " - " + enddate;
    } else {
        var defaultDateString = undefined;
    };

    // comparison date range

    // if there's a comparison date range, display that first
    if (data.tables.COMPARISON === undefined) {
        //console.log('No comparison date range');
    } else {
        var comparisonTable = data.tables.COMPARISON;
        if (data.dateRanges !== undefined) {
            // var comparisonDateRange = data.dateRanges.COMPARISON;
            var startdate = new Date(Date.UTC(data.dateRanges.COMPARISON.start.substring(0, 4), data.dateRanges.COMPARISON.start.substring(4, 6) - 1, data.dateRanges.COMPARISON.start.substring(6, 8))).toLocaleString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC"
                }),
                enddate = new Date(Date.UTC(data.dateRanges.COMPARISON.end.substring(0, 4), data.dateRanges.COMPARISON.end.substring(4, 6) - 1, data.dateRanges.COMPARISON.end.substring(6, 8))).toLocaleString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC"
                });
            var comparisonDateString = "from " + startdate + " - " + enddate;
        } else {
            var comparisonDateString = undefined;
        };

        createComparisonRow(comparisonTable, 0, true, comparisonDateString);
    };

    // loop over all but the first value in the rows
    for (var i = 1; i < data.tables.DEFAULT.rows[0].length - titleMetricAdjust; i++) {
        createComparisonRow(defaultTable, i, false, undefined); //defaultDateString);
    };
};

// Subscribe to data and style changes. Use the table format for data.
dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
