import { ArrayItems, Form, FormItem, NumberPicker } from "@formily/antd";
import { createForm, onFieldReact, onFieldValueChange } from "@formily/core";
import { createSchemaField } from "@formily/react";

export class FormInstace {
  constructor() { }
}
const SchemaField = createSchemaField({
  components: {
    FormItem,
    ArrayItems,
    NumberPicker
  },
  scope: {
    FormInstace
  }
});

const form = createForm({
  effects(form) {
    onFieldValueChange("name", (field, form) => {

    })
    onFieldReact("name", (field) => {
      field
    })
  },
})


export default () => {
  return (
    <div>
      <Form form={form} layout={'vertical'}>
        <SchemaField>
          <SchemaField.Number
            name={'11'}
            title={'测试'}
            x-decorator={'ArrayItems'}
            x-component={'NumberPicker'}
            x-reactions={'{{useReactions}}'}
          />

        </SchemaField>
      </Form>
    </div>
  )
}
