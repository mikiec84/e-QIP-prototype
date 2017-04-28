import React from 'react'
import { i18n } from '../../../config'
import { Address, ValidationElement, Field, Text, DateControl, BranchCollection, Svg } from '../../Form'

export default class Order extends ValidationElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateOccurred = this.updateOccurred.bind(this)
    this.updateCourtName = this.updateCourtName.bind(this)
    this.updateCourtAddress = this.updateCourtAddress.bind(this)
    this.updateAppeals = this.updateAppeals.bind(this)
  }

  update (field, values) {
    if (this.props.onUpdate) {
      this.props.onUpdate({
        Occurred: this.props.Occurred,
        CourtName: this.props.CourtName,
        CourtAddress: this.props.CourtAddress,
        Appeals: this.props.Appeals,
        [field]: values
      })
    }
  }

  updateOccurred (values) {
    this.update('Occurred', values)
  }

  updateCourtName (values) {
    this.update('CourtName', values)
  }

  updateCourtAddress (values) {
    this.update('CourtAddress', values)
  }

  updateAppeals (values) {
    this.update('Appeals', values)
  }

  render () {
    const prefix = this.props.prefix
    return (
      <div className="order">
        <Field title={i18n.t(`psychological.${prefix}.heading.occurred`)}
               help={`psychological.${prefix}.help.occurred`}
               adjustFor="labels"
               shrink={true}>
          <DateControl name="Occurred"
                       {...this.props.Occurred}
                       label={i18n.t(`psychological${prefix}.label.occurred`)}
                       hideDay={true}
                       onUpdate={this.updateOccurred}
                       onValidate={this.props.onValidate}
                       />
        </Field>

        <Field title={i18n.t(`psychological.${prefix}.heading.courtName`)}
               help={`psychological.${prefix}.help.courtName`}>
          <Text name="CourtName"
                className="courtname"
                {...this.props.CourtName}
                onUpdate={this.updateCourtName}
                onValidate={this.props.onValidate}
                />
        </Field>

        <Field title={i18n.t(`psychological.${prefix}.heading.courtAddress`)}
               help={`psychological.${prefix}.help.courtAddress`}>
          <Address name="CourtAddress"
                   {...this.props.CourtAddress}
                   label={i18n.t(`psychological.${prefix}.label.courtAddress`)}
                   onUpdate={this.updateCourtAddress}
                   onValidate={this.props.onValidate}
                   />
        </Field>

        <Field title={i18n.t(`psychological.${prefix}.heading.disposition`)}>
          <Text name="Disposition"
                className="disposition"
                {...this.props.Disposition}
                onUpdate={this.updateDisposition}
                onValidate={this.props.onValidate}
                />
        </Field>

        <BranchCollection className="appeals"
                          label={i18n.t(`psychological.${prefix}.heading.appealed`)}
                          appendLabel={i18n.t(`psychological.${prefix}.heading.appealedAnother`)}
                          items={this.props.Appeals}
                          onValidate={this.props.onValidate}
                          onUpdate={this.updateAppeals}
                          >

          <h3 className="more title">{i18n.t(`psychological.${prefix}.heading.needMore`)}</h3>
          <Svg src="img/date-down-arrow.svg" className="more arrow" />

          <Field title={i18n.t(`psychological.${prefix}.heading.appealCourtName`)}>
            <Text name="CourtName"
                  className="courtname"
                  bind={true}
                  onValidate={this.props.onValidate}
                  />
          </Field>

          <Field title={i18n.t(`psychological.${prefix}.heading.appealCourtName`)}
                 adjustFor="big-buttons">
            <Address name="CourtAddress"
                     bind={true}
                     label={i18n.t(`psychological.${prefix}.label.courtAddress`)}
                     onValidate={this.props.onValidate}
                     />
          </Field>

          <Field title={i18n.t(`psychological.${prefix}.heading.disposition`)}
                 help={`psychological.${prefix}.help.disposition`}>
            <Text name="Disposition"
                  className="disposition"
                  bind={true}
                  onValidate={this.props.onValidate}
                  />
          </Field>
        </BranchCollection>
      </div>
    )
  }
}

Order.defaultProps = {
  List: [],
  prefix: 'order'
}
