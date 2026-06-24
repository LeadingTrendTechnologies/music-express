import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ClientsGridBlock } from '@/blocks/ClientsGrid/Component'
import { ContactInfoBlock } from '@/blocks/ContactInfo/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { EquipmentListBlock } from '@/blocks/EquipmentList/Component'
import { FeatureCardsBlock } from '@/blocks/FeatureCards/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { HeadingSectionBlock } from '@/blocks/HeadingSection/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { OwnerQuoteBlock } from '@/blocks/OwnerQuote/Component'
import { PageHeaderBlock } from '@/blocks/PageHeader/Component'
import { ServiceAreaBlock } from '@/blocks/ServiceArea/Component'
import { ServiceHeroBlock } from '@/blocks/ServiceHero/Component'
import { TextSectionBlock } from '@/blocks/TextSection/Component'
import { blockSpacing, spacingStyle } from '@/blocks/shared/spacing'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  clientsGrid: ClientsGridBlock,
  contactInfo: ContactInfoBlock,
  cta: CallToActionBlock,
  equipmentList: EquipmentListBlock,
  featureCards: FeatureCardsBlock,
  formBlock: FormBlock,
  headingSection: HeadingSectionBlock,
  mediaBlock: MediaBlock,
  ownerQuote: OwnerQuoteBlock,
  pageHeader: PageHeaderBlock,
  serviceArea: ServiceAreaBlock,
  serviceHero: ServiceHeroBlock,
  textSection: TextSectionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              // Spacing is controlled per-block from the admin (Spacing group),
              // with per-block defaults applied as a fallback.
              const style = spacingStyle(block, blockSpacing[blockType])

              return (
                <div key={index} style={style}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
