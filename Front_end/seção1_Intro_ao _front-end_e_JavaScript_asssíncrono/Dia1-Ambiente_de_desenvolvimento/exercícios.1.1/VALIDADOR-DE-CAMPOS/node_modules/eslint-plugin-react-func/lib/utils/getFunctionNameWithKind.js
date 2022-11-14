
/**
 * Determines whether the given node is a `null` literal.
 * @param {ASTNode} node The node to check
 * @returns {boolean} `true` if the node is a `null` literal
 */
function isNullLiteral(node) {

    /*
     * Checking `node.value === null` does not guarantee that a literal is a null literal.
     * When parsing values that cannot be represented in the current environment (e.g. unicode
     * regexes in Node 4), `node.value` is set to `null` because it wouldn't be possible to
     * set `node.value` to a unicode regex. To make sure a literal is actually `null`, check
     * `node.regex` instead. Also see: https://github.com/eslint/eslint/issues/8020
     */
    return node.type === "Literal" && node.value === null && !node.regex && !node.bigint;
}

/**
 * Returns the result of the string conversion applied to the evaluated value of the given expression node,
 * if it can be determined statically.
 *
 * This function returns a `string` value for all `Literal` nodes and simple `TemplateLiteral` nodes only.
 * In all other cases, this function returns `null`.
 * @param {ASTNode} node Expression node.
 * @returns {string|null} String value if it can be determined. Otherwise, `null`.
 */
function getStaticStringValue(node) {
    switch (node.type) {
        case "Literal":
            if (node.value === null) {
                if (isNullLiteral(node)) {
                    return String(node.value); // "null"
                }
                if (node.regex) {
                    return `/${node.regex.pattern}/${node.regex.flags}`;
                }
                if (node.bigint) {
                    return node.bigint;
                }

                // Otherwise, this is an unknown literal. The function will return null.

            } else {
                return String(node.value);
            }
            break;
        case "TemplateLiteral":
            if (node.expressions.length === 0 && node.quasis.length === 1) {
                return node.quasis[0].value.cooked;
            }
            break;

            // no default
    }

    return null;
}

function getStaticPropertyName(node) {
  let prop;

  switch (node && node.type) {
      case "ChainExpression":
          return getStaticPropertyName(node.expression);

      case "Property":
      case "MethodDefinition":
          prop = node.key;
          break;

      case "MemberExpression":
          prop = node.property;
          break;

          // no default
  }

  if (prop) {
      if (prop.type === "Identifier" && !node.computed) {
          return prop.name;
      }

      return getStaticStringValue(prop);
  }

  return null;
}

function getFunctionNameWithKind(node) {
  const parent = node.parent;
  const tokens = [];

  if (parent.type === "MethodDefinition" && parent.static) {
      tokens.push("static");
  }
  if (node.async) {
      tokens.push("async");
  }
  if (node.generator) {
      tokens.push("generator");
  }

  if (node.type === "ArrowFunctionExpression") {
      tokens.push("arrow", "function");
  } else if (parent.type === "Property" || parent.type === "MethodDefinition") {
      if (parent.kind === "constructor") {
          return "constructor";
      }
      if (parent.kind === "get") {
          tokens.push("getter");
      } else if (parent.kind === "set") {
          tokens.push("setter");
      } else {
          tokens.push("method");
      }
  } else {
      tokens.push("function");
  }

  if (node.id) {
      tokens.push(`'${node.id.name}'`);
  } else {
      const name = getStaticPropertyName(parent);

      if (name !== null) {
          tokens.push(`'${name}'`);
      }
  }

  return tokens.join(" ");
}

module.exports = getFunctionNameWithKind;