import { expect } from 'chai';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { Vuelidate } from 'vuelidate';

import Register from '../../views/Register';

const localVue = createLocalVue();
localVue.use(Vuelidate);

describe('Register', () => {
  it('no field is allowed to be empty', () => {
    const wrapper = shallowMount(Register, { localVue });
    wrapper.setData({
      name: '',
      email: '',
      password: '',
      password2: '',
    });
    expect(wrapper.vm.$v.name.required).to.equal(false);
    expect(wrapper.vm.$v.email.required).to.equal(false);
    expect(wrapper.vm.$v.password.required).to.equal(false);
    expect(wrapper.vm.$v.password2.required).to.equal(false);
  });
  it('name must be at least 3, password at least 8 characters long', () => {
    const wrapper = shallowMount(Register, { localVue });
    wrapper.setData({
      name: '12',
      password: '1234567',
    });
    expect(wrapper.vm.$v.name.minLength).to.equal(false);
    expect(wrapper.vm.$v.password.minLength).to.equal(false);
  });
  it('password and password2 need to match', () => {
    const wrapper = shallowMount(Register, { localVue });
    wrapper.setData({
      password: 'foo123456',
      password2: 'bar123456',
    });
    expect(wrapper.vm.$v.password2.sameAsPassword).to.equal(false);
  });
  it('with correct data, the validation passes successfully', () => {
    const wrapper = shallowMount(Register, { localVue });
    wrapper.setData({
      name: 'peter',
      email: 'peter.urban@email.com',
      password: 'foo12345',
      password2: 'foo12345',
    });
    expect(wrapper.vm.$v.name.$invalid).to.equal(false);
    expect(wrapper.vm.$v.email.$invalid).to.equal(false);
    expect(wrapper.vm.$v.password.$invalid).to.equal(false);
    expect(wrapper.vm.$v.password2.$invalid).to.equal(false);
    expect(wrapper.vm.$v.$invalid).to.equal(false);
  });
});
