// ==UserScript==
// @name          Hacker News - Zenburn Dark
// @namespace     http://userstyles.org
// @description	  A zenburn dark theme user-style for http://news.ycombinator.com
// @author        incrediblygood
// @homepage      https://userstyles.org/styles/97106
// @include       http://news.ycombinator.com/*
// @include       https://news.ycombinator.com/*
// @include       http://*.news.ycombinator.com/*
// @include       https://*.news.ycombinator.com/*
// @run-at        document-start
// @version       0.20151211172946
// ==/UserScript==
(function() {var css = [
	"* {",
	"    color: #dcdccc !important;",
	"    background-color: #404040 !important;",
	"  }",
	"  body > center > table > tbody > tr:first-child * {",
	"    background-color: #505050 !important;",
	"  }",
	"  body > center > table > tbody > tr:first-child * a:hover {",
	"    background: #404040 !important;",
	"  }",
	"  code, pre, input, textarea {",
	"    background: #505050 !important;",
	"  }",
	"  a {",
	"    color: #7F9F7F !important;",
	"  }",
	"  .subtext a {",
	"    color: #dcdccc !important;",
	"  }",
	"  a:visited, a:visited span {",
	"    color: #CC9393 !important;",
	"  }",
	"  a:hover, a:hover span {",
	"    background: #505050 !important;",
	"  }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
