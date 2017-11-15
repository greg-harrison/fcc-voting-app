import { shallow } from 'vue-test-utils'
import ResponsesPollsList from '@/components/polls/responses/ResponsesPollsList.vue'
import moment from 'moment'

describe('ResponsesPollsList.vue', () => {
  it('renders li for each item in props.items', () => {
    const user = {
      details: {
        email: 'test@test.com',
        name: 'fake user',
        user_id: "00000000-0000-0000-0000-000000000000"
      },
      pollLength: 2,
      polls: [
        {
          created_date: "2017-11-09T05:00:00.000Z",
          option_value: "test",
          poll_id: "00000000-0000-0000-0000-000000000000",
          poll_option_id: "00000000-0000-0000-0000-000000000000",
          question: "New test!",
          response_id: "00000000-0000-0000-0000-000000000000",
          user_id: "00000000-0000-0000-0000-000000000000",
          user_id_created: "00000000-0000-0000-0000-000000000000",
        },
        {
          created_date: "2017-11-09T05:00:00.000Z",
          option_value: "test2",
          poll_id: "00000000-0000-0000-0000-000000000000",
          poll_option_id: "00000000-0000-0000-0000-000000000000",
          question: "New test2!",
          response_id: "00000000-0000-0000-0000-000000000000",
          user_id: "00000000-0000-0000-0000-000000000000",
          user_id_created: "00000000-0000-0000-0000-000000000000",
        }
      ]
    }
    const wrapper = shallow(ResponsesPollsList, {
      propsData: { user }
    })
    expect(wrapper.findAll('li')).toHaveLength(user.polls.length)
  })
})
