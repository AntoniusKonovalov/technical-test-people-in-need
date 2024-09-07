import { mount } from '@vue/test-utils';
import Task8 from '@/components/Task8.vue'; 

describe('IncrementButton.vue', () => {
  it('renders the correct initial count', () => {
    const wrapper = mount(Task8);
    expect(wrapper.text()).toContain('0');
  });

  it('increments the count when button is clicked', async () => {
    const wrapper = mount(Task8);
    const button = wrapper.find('button');
    
    // Click the button
    await button.trigger('click');

    // Verify that the count has incremented
    expect(wrapper.text()).toContain('1');
  });
});
