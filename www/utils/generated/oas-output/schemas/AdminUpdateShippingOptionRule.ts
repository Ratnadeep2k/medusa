/**
 * @schema AdminUpdateShippingOptionRule
 * type: object
 * description: The properties to update in the shipping option rule.
 * required:
 *   - id
 *   - operator
 *   - attribute
 *   - value
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The rule's ID.
 *   operator:
 *     type: string
 *     description: The operator used to check whether a rule applies.
 *     enum:
 *       - in
 *       - eq
 *       - ne
 *       - gt
 *       - gte
 *       - lt
 *       - lte
 *       - nin
 *   attribute:
 *     type: string
 *     title: attribute
 *     description: The name of a property or table that the rule applies to.
 *     example: customer_group
 *   value:
 *     oneOf:
 *       - type: string
 *         title: value
 *         description: A value of the attribute that enables this rule.
 *         example: cusgroup_123
 *       - type: array
 *         description: Values of the attribute that enable this rule.
 *         items:
 *           type: string
 *           title: value
 *           description: A value of the attribute that enables this rule.
 *           example: cusgroup_123
 * x-schemaName: AdminUpdateShippingOptionRule
 * 
*/
