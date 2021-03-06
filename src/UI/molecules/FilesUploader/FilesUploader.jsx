import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import If from 'react-if';
import autobind from 'core-decorators/lib/autobind';
import Promise from 'bluebird';
import PropTypes from 'prop-types';
import FileIcon from 'react-icons2/mdi/file-image';
import Dropzone from 'react-dropzone';
import cx from 'classnames';
import Button from '../../../Button';
import T from '../../../T';
import {
  zoneStyle,
  Drop,
  DropIcon,
  DropText,
  // Footer,
  Actions,
  Info,
  Header,
  Block,
} from './FilesUploader.styles';
import { Row, Col } from '../../../Grid';
import Box from '../Box';
import File from '../File';

@inject(s => ({
  upload: s.uapp.modules.upload,
  t: s.t,
}))
@observer
class FilesUploader extends Component {
  static propTypes = {
    // accept: PropTypes.string,
    value: PropTypes.any,
    dropText: PropTypes.string,
    buttonText: PropTypes.string,
    placeholder: PropTypes.string,
    validationState: PropTypes.oneOf(['success', 'warning', 'error']),
    info: PropTypes.string,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    t: PropTypes.func.isRequired,
    upload: PropTypes.object.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
  }
  static defaultProps = {
    // accept: '*',
    onSubmit: null,
    onError: null,
    value: null,
    info: null,
    dropText: null,
    buttonText: null,
    placeholder: null,
    validationState: null,
    id: null,
    title: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      dragged: false,
    };
  }
  componentWillReceiveProps(next) {
    const { value } = this.props;
    if (value !== next.value) {
      this.setState({ value: next.value });
    }
  }
  @autobind
  async onDrop(files = []) {
    const { onSubmit, upload, onError } = this.props;
    if (!upload) return;
    let value = null;
    try {
      const res = await Promise.map(files, file => (
        upload.uploadFile(file)
      ));
      value = res.map(e => e.url);
      if (onSubmit) onSubmit(value);
    } catch (err) {
      if (onError) onError(err);
      else {
        console.error('FilesUploader.onDrop', '!onError', onError, err); // eslint-disable-line
      }
    }
    this.setState({ value, dragged: false });
  }
  @autobind
  onDragged(dragged) {
    this.setState({ dragged });
  }
  @autobind
  removeFile() {
    const { onSubmit } = this.props;
    this.setState({ value: null }, () => {
      if (onSubmit) onSubmit(null);
    });
  }
  render() {
    const { dragged, value } = this.state;
    const {
      t,
      info,
      dropText,
      buttonText,
      placeholder,
      validationState,
      id,
      title,
      className,
      ...otherProps
    } = this.props;
    console.log(value);
    return (
      <React.Fragment>
        <Dropzone
          {...otherProps}
          className={cx({
            [zoneStyle]: true,
            [className]: className,
          })}
          disableClick
          // multiple={false}
          ref={(e) => { this.zone = e; }}
          onDrop={this.onDrop}
          onDragEnter={() => this.onDragged(true)}
          onDragLeave={() => this.onDragged(false)}
        >
          <If condition={dragged}>
            <Drop>
              <DropText>
                {dropText || t('upload.dropFiles')}
              </DropText>
              <DropIcon>
                <FileIcon />
              </DropIcon>
            </Drop>
          </If>
          <If condition={!dragged}>
            <Block
              validationState={validationState}
            >
              <Header>
                <Info>
                  {info || t('upload.infoFiles')}
                </Info>
                <Actions>
                  <If condition={!value}>
                    <Button
                      type="button"
                      onClick={() => this.zone.open()}
                    >
                      {buttonText || t('upload.buttonFiles')}
                    </Button>
                  </If>
                  <If condition={value?.length}>
                    <Button
                      type="button"
                      onClick={this.removeFile}
                    >
                      <T name="lskComponents.filesUploaderButton" />
                    </Button>
                  </If>
                </Actions>
              </Header>
              {/* <Footer>
                <If condition={value}>
                  <Button
                    type="button"
                    paint="danger"
                    onClick={this.removeFile}
                  >
                    Delete file
                  </Button>
                </If>
              </Footer> */}
            </Block>
          </If>
        </Dropzone>
        <If condition={Array.isArray(value)}>
          <Box paint="transparent">
            <Box.Header padded>
              <T name="lskComponents.filesCount" count={value.length} />
            </Box.Header>
            <Box.Body padded>
              <Row vertical gap={8}>
                {value.map((e, i) => (
                  <Col key={i} sm={4}> {/* eslint-disable-line react/no-array-index-key */}
                    <File url={e} />
                  </Col>
                ))}
              </Row>
            </Box.Body>
          </Box>
        </If>
      </React.Fragment>
    );
  }
}

export default FilesUploader;
