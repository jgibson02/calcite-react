import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './Select.md';

import Alert from '../../Alert';
import Card, { CardTitle, CardContent } from '../../Card';
import { MenuItem } from '../../Menu';
import Button from '../../Button';
import { StyledSelectInput } from '../Select-styled';
import ChevronDown from 'mdi-react/ChevronDownIcon';
import Select from '../';

import { FormControl, FormControlLabel } from '../../Form';

storiesOf('Select', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Select onChange={action('onChange')}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </GuideExample>
        <GuideExample label="FormControlLabel">
          <FormControl>
            <FormControlLabel>Value:</FormControlLabel>
            <Select onChange={action('onChange')}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Controlled Select',
    withInfo(doc)(() => {
      class ControlledSelect extends Component {
        constructor(props) {
          super(props);
          this.state = {
            selectedValue: 10,
            selectedItem: null
          };
        }

        handleSelectChange = (value, item) => {
          this.setState({
            selectedValue: value,
            selectedItem: item
          });
        };

        render() {
          return (
            <div>
              <GuideExample label="selectedItem={this.state.selectedValue}">
                <Select
                  onChange={this.handleSelectChange}
                  selectedValue={this.state.selectedValue}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </GuideExample>
              <GuideExample label="selectedItem={this.state.selectedItem}">
                <Select
                  input={<Button icon={<ChevronDown />} />}
                  onChange={this.handleSelectChange}
                  selectedItem={this.state.selectedItem}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </GuideExample>
            </div>
          );
        }
      }
      return <ControlledSelect />;
    })
  )
  .add(
    'Custom Input',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <FormControl>
            <FormControlLabel>Value:</FormControlLabel>
            <Select
              input={<StyledSelectInput minimal type="text" />}
              onChange={action('onChange')}
              horizontal
              wrapperStyle={{ display: 'inline' }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Ridiculous Example',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Select input={<Button />} onChange={action('onChange')}>
            <li value={10}>Go to Online</li>
            <option value={20}>Help</option>
            <Alert value={30}>Sign Out</Alert>
            <div value={40}>I'm a div!</div>
            <Card
              value={50}
              label="Card Option"
              bar="green"
              style={{ margin: '0 5px', width: '300px' }}
            >
              <CardContent>
                <CardTitle>Card with Colored Bar</CardTitle>
                <p>
                  Every color in calcite can be used as a colored "bar" along
                  the top of a card to provide a bit of visual punch with{' '}
                  <code>bar="{'{color}'}"</code>
                </p>
              </CardContent>
            </Card>
          </Select>
        </GuideExample>
      </div>
    ))
  );