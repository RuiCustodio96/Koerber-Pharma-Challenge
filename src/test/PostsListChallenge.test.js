/// <reference types="vitest" />

import { test, describe } from "vitest";
import { mount } from '@vue/test-utils'
import PostsListChallenge from '../components/PostsListChallenge.vue'

describe('PostsListChallenge', () => {
    test('Unit Test - Email Validator', () => {
        const wrapper = mount(PostsListChallenge, {
            data() {
                return {
                    email: 'test'
                }
            }
        })

        // see if the message renders
        expect(wrapper.find('.posts-email').text()).toEqual(this.email);

        // assert the error is rendered
        expect(wrapper.find('.valid').exists()).toBeTruthy();

        // update the `username` and assert error is no longer rendered
        wrapper.setData({ email: 'test@email.com' });
        expect(wrapper.find('.valid').exists()).toBeFalsy();
    })
})